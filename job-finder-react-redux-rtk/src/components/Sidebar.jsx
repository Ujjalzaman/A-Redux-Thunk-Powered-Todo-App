import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterSelected } from '../features/filter/filterSlice';


const Sidebar = () => {
  const dispatch = useDispatch();


  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="main-menu menu-active"
              id="lws-alljobs-menu"
              onClick={() => dispatch(filterSelected(''))}
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2">
              <li>
                <button
                  className="sub-menu"
                  id="lws-internship-menu"
                  onClick={() => dispatch(filterSelected('Internship'))}

                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </button>
              </li>
              <li>
                <button
                  className="sub-menu"
                  id="lws-fulltime-menu"
                  onClick={() => dispatch(filterSelected('Full Time'))}

                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </button>
              </li>
              <li>
                <button
                  className="sub-menu"
                  id="lws-remote-menu"
                  onClick={() => dispatch(filterSelected('Remote'))}

                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addJob" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar