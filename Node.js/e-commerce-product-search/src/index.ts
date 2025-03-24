import { AppDataSource } from "./config/database";
import express from "express";
import { searchProductsHandler } from "./controller/product.controller";

const port = 3000;
const app = express();
app.use(express.json());

app.get("/product", searchProductsHandler);

AppDataSource.initialize()
    .then(async() => {
        console.log("Database initialized !");

        app.listen(port, () => {
            console.log(`Server Running on http://loclahost:${port}`);
        });

    })
    .catch(err => {
        console.log("Database initialization Failed ! :", err);
    })