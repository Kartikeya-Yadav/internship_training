import express from "express";
import { AppDataSource } from "./config/database";
import { userRouter } from "./routes/user.route";
import { productRouter } from "./routes/product.route";
import "reflect-metadata"
import { orderRouter } from "./routes/order.route";

const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter)

AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized !");

        app.listen(3000, ()=> {
            console.log("Server running on http://localhost:3000");
            
        })
    })
    .catch(err => {
        console.log("Database initialization Failed ! :", err);
    })