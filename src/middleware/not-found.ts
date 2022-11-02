import {Request, Response, NextFunction, response } from "express";
import { request } from "http";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction

) => {
  const message = "Resource not found"

  response.status(404).send(message)
}