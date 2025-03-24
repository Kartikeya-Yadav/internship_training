import { Router } from "express";
import { ProductController } from "../controller/product.controller";

export const productRouter = Router();

productRouter.post("/", ProductController.addProductHandler);
productRouter.route('/').get(ProductController.getAllProductsHandler);
