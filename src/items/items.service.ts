//src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import {BaseItem , Item} from "./item.interface"
import {Items} from "./items.interface"

/**
 * In-Memory Store
 * 
 */

 let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 588,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 345,
    description: "cheesy",
    image: "https://cdn.auth0.com/whatabyte/pizza-sm.png",
  },
  3: {
    id: 3,
    name: "Tea", 
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
  }
};


/**
 * Service Methods
 */

//to stimulate asynchronous nature of read/write, all the service methods are async methods
// findALl returns the whole 'items' store object
export const findAll = async (): Promise<Item[]> => Object.values(items);

//find receives an 'id' parameter that it uses to look up and return a single store element if found
export const find = async (id: number): Promise<Item> => items[id];

//create method recieves an object type of 'BaseItem' as an argument, providing all the required values to define a new item in the store, except the item's 'id' 
// to create a unique 'id' value for each new element added to the store, you use the value of the current 'Date' based on the number of milliseconds between 1 jan 1970 00:00:00 UTC and the current time
export const create = async (newItem: BaseItem): Promise<Item> => {

  const id = new Date().valueOf()

  items[id] = {
    id, 
    ...newItem,

  }
  return items[id];
}

//Update method
export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if(!item) {
    return null;
  }

  items[id] = {id, ...itemUpdate};

  return items[id];
}

//define a method to remove an item from the store
export const remove = async (id: number) : Promise<null | void> => {
  const item = await find(id)

  if(!item) {
    return null;
  }

  delete items[id]
}