// reducers/rootReducers.js
import { combineReducers } from 'redux'
import todosReducers from './todosReducers'

const rootReducers = combineReducers({
  todosReducers
})

export default rootReducers
