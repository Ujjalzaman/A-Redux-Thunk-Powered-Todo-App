import React from 'react'
import JobsList from '../components/JobsList'

const HomePage = () => {
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autocomplete="sort"
            className="flex-1"
          >
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
          </select>
        </div>
      </div>

      <JobsList />
    </main>
  )
}

export default HomePage