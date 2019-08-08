import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    const label = this.state.label;

    if (label) {
      this.props.onItemAdded(label);
    }
    
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={ this.onSubmit } >
        <div className="input-group">
          <input className="form-control"
            type="text"
            placeholder="Type item name"
            onChange={ this.onLabelChange }
            value={ this.state.label } />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit">Add Item</button>
          </div>
        </div>
      </form>
    );
  }
};