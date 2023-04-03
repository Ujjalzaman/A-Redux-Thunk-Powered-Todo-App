import React from 'react'
import Book from './Book'
import { useDispatch, useSelector } from 'react-redux';
import { bookFilter } from '../redux/filter/action';



const BookList = () => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const {status, search} = filter;
  const dispatch = useDispatch();
  const handleStatus = (statusType) => {
    dispatch(bookFilter(statusType))
  }

  const filterByStatus = (book) =>{
    switch (status) {
      case 'Featured':
        return book.featured
      default:
        return book;
    }
  }
  const filterBySearch = (book) => {
    const searchTerms = search.toLowerCase().split(/[ ,.]+/); // split search string by whitespace and punctuation
    const bookProperties = [book.name, book.author]; // add additional properties here
    
    return searchTerms.every((term) => // check that all search terms match at least one book property
      bookProperties.some(
        (prop) => prop.toLowerCase().replace(/[ ,.]+/g, '').includes(term)
      )
    );
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
            .filter(filterBySearch)
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