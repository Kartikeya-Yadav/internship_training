import { Request, Response } from "express";
import { searchProducts } from "../service/product.service";


export const searchProductsHandler = async (req: Request, res: Response) => {
    try {
        const searchFilters = req.body;
        const products = await searchProducts(searchFilters);
        res.status(200).json(products);
    } catch (error) {
        res.status(200).json({error: (error as Error).message });
    }
}
