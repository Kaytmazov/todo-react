import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onSearchChange = (evt) => {
    const term = evt.target.value;
    
    this.setState({ term });
    this.props.onSearchChanged(term);
  };

  render() {
    const { filter, onFilterChanged } = this.props;
    
    return (
      <div className="search-panel">
        <input className="form-control" 
               placeholder="search"
               value={ this.state.term }
               onChange={ this.onSearchChange } />
        <ItemStatusFilter filter={ filter }
                          onFilterChange={ onFilterChanged } />
      </div>
    );
  }
};