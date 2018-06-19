// reducers/todosReducers.js
import * as ActionTypes from '../constants/ActionTypes'

// Khoi tao state ban dau
const initialState = [{
  id: 0,
  text: 'Manh dep trai',
  marked: false
}]

export default function todos (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [{
        id: state.length === 0 ? 0 : state[0].id + 1,
        text: action.text,
        marked: false
      }, ...state]
    case ActionTypes.EDIT_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
    case ActionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case ActionTypes.MARK_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, marked: !todo.marked} : todo)
    case ActionTypes.MARK_ALL:
      const areAllMarked = state.every(todo => todo.marked)
      return state.map(todo => ({...todo, marked: !areAllMarked}))
    case ActionTypes.CLEAR_MARKED:
      return state.filter(todo => todo.marked === false)
    default:
      return state
  }
}
