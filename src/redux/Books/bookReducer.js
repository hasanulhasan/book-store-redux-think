import { ADDED, DELETED, EDITED, LOADED } from "./actionTypes";


const initialState = [
  {
    id: 1,
    name: "Slow Horses (Deluxe Edition)",
    author: "Mick Herron",
    thumbnail: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    price: 14,
    rating: 3,
    featured: false
  },
  {
    id: 2,
    name: "Abong Himu",
    author: "Mick Herron",
    thumbnail: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    price: 14,
    rating: 4,
    featured: true
  },
  {
    id: 3,
    name: "Kishor alo",
    author: "Mick Herron",
    thumbnail: "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    price: 14,
    rating: 2,
    featured: true
  }
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