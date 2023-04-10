/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length = 0;

    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
      addItem: action,
      editItem: action,
      deleteItem: action,
    });
  }
  checkItem = (name) => {
    let item = this.findItem(name);
    item.completed = !item.completed;
  };
  addItem = (name) => {
    let newItem = new Item(name);
    this.list.push(newItem);
    // your code here
  };
  editItem = (itemName, newLocation) => {
    let item = this.findItem(itemName);
    item.location = newLocation;
    // your code here
  };
  deleteItem = (itemName) => {
    let item = this.findItem(itemName);
    this.list.splice(this.list.indexOf(item), 1);
    // your code here
  };
  findItem = (itemName) => {
    let item = this.list.find((i) => i.name === itemName);
    return item;
  };
}
