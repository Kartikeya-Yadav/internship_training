import { Router } from "express";
import { adminController } from "../controllers/adminController";


export const adminRouter = Router();

adminRouter.get("/leaves/report", adminController.getLeaveReportHandler);
