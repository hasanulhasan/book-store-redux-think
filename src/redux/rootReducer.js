import { combineReducers } from "redux";
import bookReducer from "./Books/bookReducer";
import filterReducer from "./Filter/filterReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  filters: filterReducer
})

export default rootReducer