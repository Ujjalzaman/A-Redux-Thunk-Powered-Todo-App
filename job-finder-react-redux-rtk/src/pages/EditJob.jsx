import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../features/job/jobSlice';
import EditForm from '../components/EditForm';

const EditJob = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const { jobs, isLoading, isError, error } = useSelector((state) => state.job);

  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && jobs.length > 0) {
    const editJobArray = jobs?.filter((job) => job.id === parseInt(jobId));
    const jobToEdit = editJobArray.length > 0 ? editJobArray[0] : {};
    content = <EditForm jobToEdit={jobToEdit} />;
  }
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>
      {content}
      <div className="max-w-3xl mx-auto"></div>
    </main>
  )
}

export default EditJob