import { Request, Response } from "express";
import { placeOrder } from "../service/order.service";

export const placeOrderHandler = async function (req: Request, res: Response) {
    try {
        const { userId, items } = req.body;
        const result = await placeOrder(userId, items);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: (error as Error).message});
    }
}