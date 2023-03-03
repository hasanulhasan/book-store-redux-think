import { ADDED, DELETED, EDITED, LOADED } from "./actionTypes"

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books
  }
}
export const added = (book) => {
  return {
    type: ADDED,
    payload: book
  }
}

export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId
  }
}
export const edited = (book) => {
  return {
    type: EDITED,
    payload: book
  }
}