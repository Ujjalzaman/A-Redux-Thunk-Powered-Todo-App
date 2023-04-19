import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addJob/" element={<AddJob />} />
            <Route path="/editJob/:jobId" element={<EditJob />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
