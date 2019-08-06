import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: this.props.important
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onImportantBtnClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
          onClick={ this.onLabelClick }>
            { label }
        </span>
  
        <button className="btn btn-outline-success btn-sm"
          type="button"
          onClick={ this.onImportantBtnClick }>
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
};