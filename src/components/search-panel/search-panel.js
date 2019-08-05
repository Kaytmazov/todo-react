import React from 'react';
import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <input className="form-control" placeholder="search" />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;