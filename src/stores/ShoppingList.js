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
    });
  }
  checkItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
  addItem = (name) => {
    let newItem = new Item(name);
    this.list.push(newItem);
    // your code here
  };
  editItem = (itemName, newLocation) => {
    let itemIndex = this.list.findIndex((item) => item.name == itemName);
    let listItem = this.list[itemIndex];
    console.log(listItem);
    listItem.setLocation(newLocation);
    // your code here
  };
  deleteItem = () => {
    // your code here
  };
}
