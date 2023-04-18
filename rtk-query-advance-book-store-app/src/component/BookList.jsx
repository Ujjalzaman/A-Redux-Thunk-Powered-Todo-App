import React from 'react'
import { useGetBooksQuery } from '../Features/bookApi';
import Book from './Book';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelected } from '../Features/filterSlice';


const BookList = () => {
  const dispatch = useDispatch();
  const {filter, search} = useSelector((state) => state.filter);
  const { data, isLoading, isError, error } = useGetBooksQuery();

  const filtersearch = (item) => {
    if(filter === 'Featured'){
        return item.featured
    }
    else{
      return true;
    }
  }
  const filterBySearch = (item) => {
    if(search !== ''){
      return item.name.toLowerCase().includes(search.toLowerCase())
    }else{
      return true;  
    }
  }
  

  let content = null;
  if (isLoading) content = <p>Loading....</p>;
  if (!isLoading && isError) content = <p>{error}</p>;
  if (!isLoading && !isError && data?.length === 0) content = <p>Empty...</p>;
  if (!isLoading && !isError && data?.length > 0) {
    content = 
    data
    .filter(filtersearch)
    .filter(filterBySearch)
    .map((item) => 
    <Book item={item} key={item.id} />
    )
  }

  return (
    <div className="order-1 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button 
          className={`filter-btn ${filter === 'all' && 'active-filter'}`}
          id="lws-filterAll" onClick={() => dispatch(filterSelected('all'))}>All</button>
          <button 
          className={`filter-btn ${filter === 'Featured' && 'active-filter'}`} 
          id="lws-filterFeatured" onClick={() => dispatch(filterSelected('Featured'))}>Featured</button>
          <Link to='/add'>
            <button className="" id="lws-filterFeatured" >Add</button>
          </Link>
        </div>
      </div>
      <div className="lws-bookContainer">
        {content}
      </div>
    </div>
  )
}

export default BookList