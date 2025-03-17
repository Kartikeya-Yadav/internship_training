import { Request, Response } from "express";
import { adminService } from "../services/adminService";

class AdminController {
    async getLeaveReportHandler(req: Request, res: Response) {
        try {
            const leaveReport = await adminService.getLeaveReport();
            res.status(200).json(leaveReport);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export const adminController = new AdminController();