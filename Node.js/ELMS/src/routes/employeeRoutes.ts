import { Router } from "express";
import { employeeController } from "../controllers/employeeController";


export const employeeRouter: Router = Router();

employeeRouter.post('/leaves', employeeController.applyLeaveHandler);
employeeRouter.get('/leaves/:empId', employeeController.getLeaveHistoryHandler);
