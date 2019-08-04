import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Drink Cofee" /></li>
      <li><TodoListItem 
        label="Drink Tea"
        important /></li>
    </ul>
  );
};

export default TodoList;