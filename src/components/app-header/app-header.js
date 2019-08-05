import React from 'react';

import './app-header.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <header className="app-header">
      <h1>My Todo list</h1>
      <span className="text-muted">{toDo} more to do, {done} done</span>
    </header>
  );
};

export default AppHeader;