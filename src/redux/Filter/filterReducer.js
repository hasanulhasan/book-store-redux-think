import { EDITED } from "../Books/actionTypes"
import { SEARCHBOOK, STATUSCHANGED } from "./actionTypes"

const initialState = {
  status: 'All',
  searchText: '',
  editedBook: {}
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload
      }
    case SEARCHBOOK:
      return {
        ...state,
        searchText: action.payload
      }
    case EDITED:
      return {
        ...state,
        editedBook: action.payload
      }

    default:
      return state
  }
}
export default filterReducer;