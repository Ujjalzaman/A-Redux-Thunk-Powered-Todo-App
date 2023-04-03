import React, { useEffect } from 'react'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux';
import { bookFilter } from '../redux/filter/action';
import fetchBooks from '../redux/book/thunk/fetchBook';



const BookList = () => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks)
  }, [dispatch])

  const { status, search } = filter;
  const handleStatus = (statusType) => {
    dispatch(bookFilter(statusType))
  }

  const filterByStatus = (book) => {
    switch (status) {
      case 'Featured':
        return book.featured
      default:
        return book;
    }
  }
  const filterBySearch = (bookList) => {
    return filter.search ? bookList.name.toLowerCase().includes(filter.search.toLowerCase()) : true;
  };
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className={`filter-btn ${status === 'All' && 'active-filter'}`} id="lws-filterAll" onClick={() => handleStatus('All')}>All</button>
          <button className={`filter-btn ${status === 'Featured' && 'active-filter'}`} id="lws-filterFeatured" onClick={() => handleStatus('Featured')}>Featured</button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {books.length !== 0 ?
          books
            .filter(filterByStatus)
            .filter((book) =>
              filter.search
                ? book.name?.toLowerCase().includes(filter.search.toLowerCase())
                : book
            )
            .map((item) => (
              <Book item={item} key={item.id} />
            ))

          : 'No books are availble'
        }
      </div>
    </div>
  )
}

export default BookList