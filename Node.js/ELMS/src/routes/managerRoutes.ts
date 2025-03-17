import { Router } from "express";
import { managerController } from "../controllers/managerController";

export const managerRouter = Router();

managerRouter.get("/leaves/pending", managerController.getAllPendingLeavesHandler);
managerRouter.put("/leaves/:leaveId/approve", managerController.approveLeaveHandler);
managerRouter.put("/leaves/:leaveId/reject", managerController.rejectLeaveHandler);