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