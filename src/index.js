import 'todomvc-app-css/index.css'
import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './containers/TodoApp'
import rootReducer from './reducers/rootReducers'

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState)

const appRoot = (
  <Provider store={store} >
    <div>
      <TodoApp />
    </div>
  </Provider>
)

ReactDom.render(appRoot, document.getElementById('root'))
