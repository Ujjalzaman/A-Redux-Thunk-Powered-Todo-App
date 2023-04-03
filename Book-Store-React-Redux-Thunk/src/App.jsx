import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import BookList from './component/BookList'
import AddNewFrom from './component/AddNewFrom'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Nav />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList/>
          <AddNewFrom />
        </div>
      </main>
    </>
  )
}

export default App
