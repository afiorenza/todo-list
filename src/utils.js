export const addTodo = (todo, todos) => [ ...todos, { text: todo } ];

export const removeTodo = (index, todos) => [
  ...todos.slice(0, index),
  ...todos.slice(index + 1)
];