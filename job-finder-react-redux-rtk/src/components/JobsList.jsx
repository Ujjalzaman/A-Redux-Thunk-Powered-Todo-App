import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchJobs} from '../features/job/jobSlice';
import JobItem from '../components/JobItem';

const JobsList = () => {
  const {jobs, isLoading, isError, error} = useSelector((state) => state.job);
  const {filter, searchTerm, sort} = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch])

  //decide what to render
  let content = null;
  if(isLoading) content = <div>Loading ...</div>;
  if(!isLoading && isError) content = <div>Something went wrong.</div>;
  if(!isLoading && !isError && jobs?.length === 0) content = <div>Data is empty.</div>;
  if(!isLoading && !isError && jobs?.length > 0) {
    if (filter)
      content = jobs
        .filter((job) => job.type === filter)
        .map((job) => <JobItem key={job.id} job={job} />);
    // if only searchTerm present
    if (searchTerm)
      content = jobs
        .filter((job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((job) => <JobItem key={job.id} job={job} />);
    // if filter & searchTerm both are present
    if (filter && searchTerm)
      content = jobs
        .filter((job) => job.type === filter)
        .filter((job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((job) => <JobItem key={job.id} job={job} />);
    // if neither filter or searchTerm is present
    if (!filter && !searchTerm)
      content = jobs.map((job) => <JobItem key={job.id} job={job} />);
  }
  // sorting the resultant content
  if (!isLoading && !isError && jobs?.length > 0 && sort) {
    if (sort === 'Salary (Low to High)')
      content.sort(
        (a, b) => parseInt(a.props.job.salary) - parseInt(b.props.job.salary)
      );
    if (sort === 'Salary (High to Low)')
      content.sort(
        (a, b) => parseInt(b.props.job.salary) - parseInt(a.props.job.salary)
      );
  }

  return (
    <div className="jobs-list">{content}</div>
  )
}

export default JobsList