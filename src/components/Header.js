import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }
  render () {
    return (
      <header className='header'>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo={true}
          onSave={this.handleSave}
          placeholder='What need to be done?'
        />
      </header>
    )
  }
}

Header.protoTypes = {
  addTodo: PropTypes.func.isRequired
}
