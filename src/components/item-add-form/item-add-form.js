import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({ onItemAdded }) => {
  return (
    <form className="item-add-form" onSubmit={ (evt) => { evt.preventDefault(); onItemAdded('Hello World'); } }>
      <div className="input-group">
        <input className="form-control" type="text" placeholder="Type item name" />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="submit">Add Item</button>
        </div>
      </div>
    </form>
  );
};

export default ItemAddForm;