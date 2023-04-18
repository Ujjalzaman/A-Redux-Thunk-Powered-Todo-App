import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEditBookMutation, useGetBookQuery } from '../Features/bookApi';

const EditFrom = () => {
  const { editId } = useParams();
  const navigate = useNavigate();
  const { data: getbook } = useGetBookQuery(editId);
  const [editBook, {isError, isSuccess, isLoading, error}] = useEditBookMutation();
  let book = {name : '', author : '', thumbnail : '', price : '', rating : '', featured : false}
  if(editId) {
    book = getbook;
  }
  const [input, setInput] = useState(book); 
  const handleOnSumit = (e) => {
    e.preventDefault();
    editBook({id: editId, book:input})
  }
  useEffect(() => {
    if(isSuccess) navigate('/');
  }, [isSuccess, navigate])

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleOnSumit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>

            <input required className="text-input" type="text" id="input-Bookname" defaultValue={editId && book?.name} onChange={(e) => setInput((prev) => ({...prev, name: e.target.value}))} />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input required className="text-input" type="text" id="input-Bookauthor" name="author" defaultValue={editId && book?.author} onChange={(e) => setInput((prev) => ({...prev, author: e.target.value}))} />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" defaultValue={editId && book?.thumbnail} onChange={(e) => setInput((prev) => ({...prev, thumbnail: e.target.value}))} />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input required className="text-input" type="number" id="input-Bookprice" name="price" defaultValue={editId && book?.price} onChange={(e) => setInput((prev) => ({...prev, price: e.target.value}))} />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input required className="text-input" type="number" id="input-Bookrating" name="rating" defaultValue={editId && book?.rating} onChange={(e) => setInput((prev) => ({...prev, rating: e.target.value}))} />
            </div>
          </div>

          <div className="flex items-center">
            <input id="input-Bookfeatured" type="checkbox" name="featured" defaultChecked={editId && book?.featured} className="w-4 h-4" onChange={(e) => setInput((prev) => ({...prev, featured: e.target.checked}))} />
            <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
          </div>
          <button disabled={isLoading} type="submit" className="submit" id="submit">Update Book</button>
        </form>
        {isError && <p>{error}</p>}
      </div>
    </div>
  )
}

export default EditFrom;