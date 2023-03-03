import { ADDED, DELETED, EDITED, LOADED } from "./actionTypes";


const initialState = [
]

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload

    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          name: action.payload.name,
          author: action.payload.author,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          rating: action.payload.rating,
          featured: action.payload.featured
        }
      ]

    case DELETED:
      return state.filter(book => book.id !== action.payload);

    default:
      return state
  }
}

export default bookReducer