import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChanged } from '../redux/Filter/action';
import fetchBooks from '../Thank/fetchBooks';
import AddBook from './AddBook';
import Books from './Books';

const Home = () => {
  const books = useSelector(state => state.books);
  const filters = useSelector(state => state.filters);
  const { status, searchText } = filters;
  const dispatch = useDispatch();
  // console.log(searchText)

  useEffect(() => {
    dispatch(fetchBooks)
  }, [dispatch])

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status))
  }
  return (
    <main class="py-12 2xl:px-6">
      <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div class="order-2 xl:-order-1">
          <div class="flex items-center justify-between mb-12">
            <h4 class="mt-2 text-xl font-bold">Book List</h4>

            <div class="flex items-center space-x-4">
              <button onClick={() => handleStatusChanged('All')} class="filter-btn active-filter" id="lws-filterAll">All</button>
              <button onClick={() => handleStatusChanged('featured')} class="filter-btn" id="lws-filterFeatured">Featured</button>
            </div>
          </div>
          <div class="lws-bookContainer">
            {
              books.filter(book => {
                if (status === 'featured') {
                  return book.featured
                }
                else {
                  return book
                }
              }).filter(book => book.name.toLowerCase().includes(searchText.toLowerCase())).map(book => <Books book={book}></Books>)
            }
          </div>
        </div>
        <div>
          <AddBook />
        </div>
      </div>
    </main>
  );
};

export default Home;