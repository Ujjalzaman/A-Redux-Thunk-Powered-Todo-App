import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addedBook } from '../redux/book/actions';

const AddNewFrom = () => {
  // name, author, thumbnail, price, rating, featured 
  const dispatch = useDispatch();
  const [input, setInput] = useState({name : '', author : '', thumbnail : '', price : '', rating : '', featured : ''});
  const [featured, setFeatured] = useState(false)
  const handleChange = (e) =>{setInput((prev) => ({...prev, [e.target.name]: e.target.value}))}
  const handleOnSelect = () =>{setFeatured(!featured)}

  const handleOnSubmit = (e) =>{
    const data = {
      ...input,featured: featured 
    }
    dispatch(addedBook(data))
    e.preventDefault();
    setInput({name : '', author : '', thumbnail : '', price : '', rating : '', featured : ''})
  }

  
  return (
    <>
    <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form" onSubmit={handleOnSubmit}>
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input required className="text-input" type="text" id="input-Bookname" value={input.name} name="name" onChange={handleChange}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="category">Author</label>
              <input required className="text-input" type="text" id="input-Bookauthor" value={input.author} name="author" onChange={handleChange}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input required className="text-input" type="text" id="input-Bookthumbnail" value={input.thumbnail} name="thumbnail" onChange={handleChange}/>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input required className="text-input" type="number" id="input-Bookprice" value={input.price} name="price" onChange={handleChange}/>
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input required className="text-input" type="number" id="input-Bookrating" value={input.rating} name="rating" min="1" max="5" onChange={handleChange}/>
              </div>
            </div>

            <div className="flex items-center">
              <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={handleOnSelect}/>
              <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="submit">Add Book</button>
          </form>
        </div>
      </div>
      </>
  )
}

export default AddNewFrom