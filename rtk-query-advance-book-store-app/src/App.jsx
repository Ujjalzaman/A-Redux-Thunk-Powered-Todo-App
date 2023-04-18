import Nav from './component/Nav'
import BookList from './component/BookList'
import AddNewFrom from './component/AddNewFrom';
import EditFrom from './component/EditFrom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-3 gap-4 2xl:gap-8">
          <Routes>
            <Route path='/' element={<BookList />} />
            <Route path='/edit/:editId' element={<EditFrom />} />
            <Route path='/add' element={<AddNewFrom />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
