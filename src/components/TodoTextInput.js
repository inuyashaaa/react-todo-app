import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
export default class TodoTextInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleBlur = (event) => {
    if (!this.props.newTodo) {
      this.props.onSave(event.target.value)
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  render () {
    return (
      <input
        className={classNames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type='text'
        placeholder={this.props.placeholder}
        autoFocus='true'
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}
