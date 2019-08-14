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
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(label) {
    return {
      id: this.maxID++,
      label,
      done: false,
      important: false
    };
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((it) => {
      return it.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  };

  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((it) => !it.done);
      case 'done':
        return items.filter((it) => it.done);
      default:
        return items;
    }
  };

  searchItem = (term) => {
    this.setState({ term });
  };

  filterItems = (filter) => {
    this.setState({ filter });
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

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((it) => it.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <SearchPanel 
          onSearchChanged={ this.searchItem }
          filter={ filter }
          onFilterChanged={ this.filterItems } />
        <TodoList
          todos={ visibleItems }
          onToggleDone={ this.toggleDone }
          onToggleImportant={ this.toggleImportant }
          onDeleted={ this.deleteItem } />
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
};