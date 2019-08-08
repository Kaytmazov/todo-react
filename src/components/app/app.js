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
      this.createTodoItem('Drink cofee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      id: this.maxID++,
      label,
      done: false,
      important: false
    };
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((it) => it.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((it) => it.id === id);

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
    const newItem = this.createTodoItem(itemLabel);

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData
      }
    });
  };

  filterList = (itemLabel) => {
    this.setState(({ todoData }) => {
      console.log(itemLabel)
      const newArr = todoData.filter((it) => it.label === itemLabel);

      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newTodoData
      }

    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((it) => it.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <SearchPanel onSearchChanged={ this.filterList } />
        <TodoList
          todos={ todoData }
          onToggleDone={ this.toggleDone }
          onToggleImportant={ this.toggleImportant }
          onDeleted={ this.deleteItem } />
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
};