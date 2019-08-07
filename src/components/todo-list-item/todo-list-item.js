import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleImportant, done, important }) => {

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }
  
  if (important) {
    classNames += ' important';
  }

  return (
    <div className={classNames}>
      <span 
        className="todo-list-item-label"
        onClick={ onToggleDone }>
          { label }
      </span>

      <button className="btn btn-outline-success btn-sm"
        type="button"
        onClick={ onToggleImportant }>
          <i className="fa fa-exclamation" />
      </button>
      <button className="btn btn-outline-danger btn-sm"
        type="button"
        onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
      </button>
    </div>
  );
};

export default TodoListItem;