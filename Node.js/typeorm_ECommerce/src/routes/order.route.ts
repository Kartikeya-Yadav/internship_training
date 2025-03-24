import { Router } from "express";
import { placeOrderHandler } from "../controller/order.controller";

export const orderRouter = Router();

orderRouter.post("/", placeOrderHandler);