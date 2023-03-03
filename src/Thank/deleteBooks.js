import { deleted } from "../redux/Books/action";



const deleteBooks = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${todoId}`, {
      method: 'DELETE',
    });
    dispatch(deleted(todoId));
  }
}

export default deleteBooks;