import React, { Component } from 'react';
import { Todos } from './Todos';

export class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = (todo, todos) =>
    todo && this.setState({ todos: [ ...todos, { text: todo } ], todo: '' })

  handleClickDelete = (index, todos) => this.setState({ todos: [
    ...todos.slice(0, index),
    ...todos.slice(index + 1)
  ]})

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
