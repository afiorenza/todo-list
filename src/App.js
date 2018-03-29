import React, { Component } from 'react';
import { Todos } from './Todos';
import { addTodo, removeTodo } from './utils'

export class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = (todo, todos) =>
    todo && this.setState({ todos: addTodo(todo, todos), todo: '' })

  handleClickDelete = (index, todos) => 
    this.setState({ todos: removeTodo(index, todos)})

  render() {
    const { todo, todos } = this.state;
    return (
      <Todos
        {...{
          todo,
          todos,
          handleChange: this.handleChange,
          handleClickAdd: this.handleClickAdd,
          handleClickDelete: this.handleClickDelete
        }}
      />
    );
  }
}
