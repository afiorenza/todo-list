import React from 'react';

export const Todo = ({text, onClickDelete}) => <div className="todo-item">
  {text}
  <span onClick={onClickDelete}>&times;</span>
</div>;

Todo.displayName = 'Todo';

export default Todo;