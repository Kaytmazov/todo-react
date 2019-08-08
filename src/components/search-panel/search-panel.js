import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchValue: ''
  };

  onSearchChange = (evt) => {
    this.setState({
      searchValue: evt.target.value
    });

    this.props.onSearchChanged(evt.target.value);
  };

  render() {
    return (
      <div className="search-panel">
        <input className="form-control" 
          placeholder="search"
          onChange={ this.onSearchChange } />
        <ItemStatusFilter />
      </div>
    );
  }
};