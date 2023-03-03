import { SEARCHBOOK, STATUSCHANGED } from "./actionTypes"

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status
  }
}
export const searchBook = (searchText) => {
  return {
    type: SEARCHBOOK,
    payload: searchText
  }
}