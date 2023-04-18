import React, { useEffect, useState } from 'react'
import { useAddBookMutation } from '../Features/bookApi';
import {useNavigate} from 'react-router-dom';

const AddNewFrom = () => {
  const [addBook, {isSuccess, isLoading, isError, error}] = useAddBookMutation();
  const navigate = useNavigate()
  const [featured, setFeatured] = useState(false);
  const [input, setInput] = useState();
  const handleChange = (e) =>{
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleOnSumit = (e) =>{
    e.preventDefault();
    input.featured = featured
    addBook(input);
    setInput('');
  }
  useEffect(() =>{
    if(isSuccess) navigate('/');
  },[isSuccess, navigate])

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleOnSumit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input required className="text-input" type="text" id="input-Bookname" name='name' onChange={handleChange}/>
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input required className="text-input" type="text" id="input-Bookauthor" name="author" onChange={handleChange}/>
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" onChange={handleChange}/>
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input required className="text-input" type="number" id="input-Bookprice" name="price" onChange={handleChange}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input required className="text-input" type="number" id="input-Bookrating" name="rating" onChange={handleChange}/>
            </div>
          </div>

          <div className="flex items-center">
            <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" onClick={(e) => setFeatured(e.target.checked)}/>
            <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
          </div>
          <button disabled={isLoading} type="submit" className="submit" id="submit">Add Book</button>
        </form>
        {isError && <p>{isError}</p>}
      </div>
    </div>
  )
}

export default AddNewFrom