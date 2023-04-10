import React, { Component } from "react";
import { observer } from "mobx-react";

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value);
  };
  editItem = () => {
    //your code here
    let newLocation = prompt("Please enter new Location");
    this.props.store.editItem(this.props.item.name, newLocation);
  };
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name);
    //your code here
    /*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */
  };
  render() {
    return (
      <div className={this.props.item.completed ? "crossed" : null}>
        <div>
          {this.props.item.name} - {this.props.item.location}
          <input
            type="checkbox"
            onClick={this.checkItem}
            value={this.props.item.name}
          />
          <button onClick={this.editItem}>edit</button>
          <button onClick={this.deleteItem}>delete !</button>
        </div>
      </div>
    );
  }
}

export default observer(Item);
