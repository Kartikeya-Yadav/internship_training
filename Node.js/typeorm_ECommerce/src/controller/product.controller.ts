import { Request, Response } from "express";
import { ProductService } from "../service/product.service";
import { Product } from "../entities/product";

export class ProductController {
    static async addProductHandler(req: Request, res: Response) {
        try {
            const product: Product = req.body;
            const result = await ProductService.addProduct(product);
            res.status(200).json(result);
        } catch (err){
            res.status(400).json({err: (err as Error).message});
        }
        
    }

    static async getAllProductsHandler(req: Request, res: Response) {
        try {
            const result = await ProductService.getAllProducts();
            res.status(200).json(result);
        } catch (err){
            res.status(400).json({err: (err as Error).message});
        }
        
    }

    static async getProductHandler(req: Request, res: Response) {
        try {
            const result = await ProductService.getAllProducts();
            res.status(200).json(result);
        } catch (err){
            res.status(400).json({err: (err as Error).message});
        }
        
    }

    
}