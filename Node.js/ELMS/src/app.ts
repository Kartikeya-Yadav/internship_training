import express from "express";
import { router } from "./routes/leaveRoute";
import { employeeRouter } from "./routes/employeeRoutes";
import { managerRouter } from "./routes/managerRoutes";
import { adminRouter } from "./routes/adminRoutes";

const app = express();

app.use(express.json());
app.use("/api", router);
app.use("/employee", employeeRouter);
app.use("/manager", managerRouter);
app.use("/admin", adminRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});