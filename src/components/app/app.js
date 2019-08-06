import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

const App = () => {
  const todoData = [
    { label: 'Drink cofee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="container">
      <AppHeader toDo={1} done={3} />
      <SearchPanel />
      <TodoList
        todos={todoData}
        onDeleted={ (id) => console.log('del: ', id) } />
    </div>
  );
};

export default App;