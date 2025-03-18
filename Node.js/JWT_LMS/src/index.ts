import express from "express";
import { authRouter } from "./routes/auth.route";
import { bookRouter } from "./routes/book.routes";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/", bookRouter);

app.listen(3000, ()=> {
    console.log("Server running on http://localhost:3000");
    
})