import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { added } from '../redux/Books/action';
import addBooks from '../Thank/addBooks';

const AddBook = () => {
  const filters = useSelector(state => state.filters);
  const { editedBook } = filters;
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const thumbnail = form.thumbnail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const featured = form.featured.checked;
    const book = { name, author, thumbnail, price, rating, featured }
    dispatch(addBooks(book));
    form.reset();
    console.log(book);
  }

  return (
    <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form class="book-form" onSubmit={handleAddBook}>
        <div class="space-y-2">
          <label for="name">Book Name</label>
          <input defaultValue={editedBook?.name} required class="text-input" type="text" id="input-Bookname" name="name" />
        </div>

        <div class="space-y-2">
          <label for="category">Author</label>
          <input defaultValue={editedBook?.author} required class="text-input" type="text" id="input-Bookauthor" name="author" />
        </div>

        <div class="space-y-2">
          <label for="image">Image Url</label>
          <input defaultValue={editedBook?.thumbnail} required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
        </div>

        <div class="grid grid-cols-2 gap-8 pb-4">
          <div class="space-y-2">
            <label for="price">Price</label>
            <input defaultValue={editedBook?.price} required class="text-input" type="number" id="input-Bookprice" name="price" />
          </div>

          <div class="space-y-2">
            <label for="quantity">Rating</label>
            <input defaultValue={editedBook?.rating} required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
          </div>
        </div>

        <div class="flex items-center">
          <input checked={editedBook?.featured} id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4" />
          <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
        </div>

        <button type="submit" class="submit" id="submit">{editedBook.id ? 'Update Book' : 'Add Book'}</button>
      </form>
    </div>
  );
};

export default AddBook;