import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addedBook } from '../redux/book/actions';
import { removeEdit } from '../redux/edit/actions';

let book = {name : '', author : '', thumbnail : '', price : '', rating : '', featured : false}

const AddNewFrom = () => {
  const editBookId = useSelector((state) => state.edit.id);
  const books = useSelector((state) => state.books); 
  const dispatch = useDispatch();
  if(editBookId){
    book = books.filter((item) => item.id === editBookId)[0];
  }

  const handleAddBook = (e) =>{
    dispatch(addedBook(input))
    e.preventDefault();
    window.location.reload(true);
  }

  const handleUpdateBook = (e) =>{
    dispatch(removeEdit())
    window.location.reload(true);
    e.preventDefault();
  }

  
  return (
    <>
    <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form">
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input required className="text-input" type="text" id="input-Bookname" defaultValue={editBookId && book.name} name="name" onChange={(e) => (book.name = e.target.value)}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="category">Author</label>
              <input required className="text-input" type="text" id="input-Bookauthor" defaultValue={editBookId && book.author} name="author" onChange={(e) => (book.author = e.target.value)}/>
            </div>

            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input required className="text-input" type="text" id="input-Bookthumbnail" defaultValue={editBookId && book.thumbnail} name="thumbnail" onChange={(e) => (book.thumbnail = e.target.value)}/>
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input required className="text-input" type="number" id="input-Bookprice" defaultValue={editBookId && book.price} name="price" onChange={(e) => (book.price = e.target.value)}/>
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity">Rating</label>
                <input required className="text-input" type="number" id="input-Bookrating" defaultValue={editBookId && book.rating} name="rating" min="1" max="5" onChange={(e) => (book.rating = e.target.value)}/>
              </div>
            </div>

            <div className="flex items-center">
              <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" defaultChecked={editBookId && book.featured} onChange={(e) => (book.featured = e.target.checked)}/>
              <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>
            {editBookId ? (
              <button type="submit" className="submit" id="submit" onClick={(e) => handleUpdateBook(e)}>Update Book</button>
              ) : (
              <button type="submit" className="submit" id="submit" onClick={(e) => handleAddBook(e)}>Add Book</button>
            )}
          </form>
        </div>
      </div>
      </>
  )
}

export default AddNewFrom