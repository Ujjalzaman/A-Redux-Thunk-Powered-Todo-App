import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createJob} from '../features/job/jobSlice';
import {useNavigate} from 'react-router-dom';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const {isLoading} = useSelector((state) => state.job);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createJob({title, type, salary, deadline}));
    setTitle('');
    setType('');
    setSalary('');
    setDeadline('')
    navigate('/')
  }

  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="fieldContainer">
            <label className="text-sm font-medium text-slate-300">
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              name="lwsJobTitle"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="" hidden selected>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label>Job Type</label>
            <select
              id="lws-JobType"
              name="lwsJobType"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label>Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lws-JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label>Deadline</label>
            <input
              type="date"
              name="lwsJobDeadline"
              id="lws-JobDeadline"
              required
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
              disabled= {isLoading}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AddJob