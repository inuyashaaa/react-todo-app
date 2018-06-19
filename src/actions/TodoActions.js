// actions/TodoActions.js
import * as ActionTypes from '../constants/ActionTypes'

export function addTodo (text) {
  return {
    type: ActionTypes.ADD_TODO,
    text
  }
}

export function deleteTodo (id) {
  return {
    type: ActionTypes.DELETE_TODO,
    id
  }
}

export function editTodo (id, text) {
  return {
    type: ActionTypes.EDIT_TODO,
    id,
    text
  }
}

export function markTodo (id) {
  return {
    type: ActionTypes.MARK_TODO,
    id
  }
}

export function markAll () {
  return {
    type: ActionTypes.MARK_ALL
  }
}

export function clearMarked (id) {
  return {
    type: ActionTypes.CLEAR_MARKED
  }
}
