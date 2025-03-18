import express  from "express";
import { feedbackRouter } from "./routes/feedback.route";
const app = express();

app.use(express.json());

app.use("/feedback", feedbackRouter);

app.listen(3000, ()=> {
    console.log("Server running on http://localhost:3000");
    
})