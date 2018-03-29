import React from 'react';
import { Todo } from './Todo';

export const Todos = ({
  todo,
  todos,
  handleChange,
  handleClickAdd,
  handleClickDelete
}) => <div className="todo-list">
  <h1>todos</h1>
  <p>{`${todos.length} remaining`}</p>
  <div>
    {
      todos.length
        ? todos.map((todo, index) => <Todo
          key={index}
          onClickDelete={() => handleClickDelete(index, todos)}
          text={todo.text} />
        )
        : 'You\'re all done 🌴'
    }
  </div>
  <div className="todo-input">
    <input
      onChange={handleChange}
      placeholder="..."
      type="text"
      value={todo}
    />
    <button onClick={() => handleClickAdd(todo, todos)}>Add</button>
  </div>
</div>

Todos.displayName = 'Todos';