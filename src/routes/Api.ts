/**
 * Require External Modules and Interfaces
 */
import express, { Request, Response } from "express"
import * as ItemService from "../controllers/service"
import { BaseItem, Item } from "../controllers/item.interface"
//(importing packages and two of it's internal type definitions, req and res)


/**
 * Router Definition
 * Express router definition
 */
export const routeApi = express.Router()

/**
 * Controller Definitions
 */

// GET items
routeApi.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

//GET items/:id
routeApi.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
routeApi.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});


//POST items
routeApi.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message)
  }
});

//PUT items/:id
routeApi.put("/:", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);

    }
    const newItem = await ItemService.create(itemUpdate)
    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message)
  }
});

//DELETE items/:id
routeApi.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
