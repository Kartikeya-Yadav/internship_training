import { employeeService } from "../services/employeeService";
import { Request } from "express";
import { Response } from "express";

class EmployeeController {

    async getLeaveHistoryHandler(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.empId);
            const leaves = await employeeService.getLeaveHistory(id);
            res.status(200).json(leaves);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }

    async applyLeaveHandler(req: Request, res: Response) {
        try {
            const leave = req.body;
            console.log(leave);
            
            await employeeService.applyLeave(leave);
            res.status(200).json("Leave applied");
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }

}

export const employeeController = new EmployeeController();




