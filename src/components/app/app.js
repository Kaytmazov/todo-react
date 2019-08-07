import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  
  maxID = 100;

  state = {
    todoData: [
      { label: 'Drink cofee', done: false, important: false, id: 1 },
      { label: 'Make Awesome App', done: false, important: true, id: 2 },
      { label: 'Have a lunch', done: false, important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newTodoData
      }
    });
  };

  addItem = (itemLabel) => {
    const newItem = {
      label: itemLabel,
      important: false,
      id: this.maxID++
    };

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData
      }
    });
  };

  onToggleDone = (id) => {

  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newTodoData = [...todoData];

      newTodoData[idx].important = !(newTodoData[idx].important);

      return {
        todoData: newTodoData
      }
    });
  };

  render() {
    return (
      <div className="container">
        <AppHeader toDo={1} done={3} />
        <SearchPanel />
        <TodoList
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.toggleImportant } />
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
};