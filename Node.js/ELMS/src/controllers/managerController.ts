import { Request } from "express";
import { Response } from "express";
import { managerService } from "../services/managerService";

class ManagerController {

    async getAllPendingLeavesHandler(req: Request, res: Response) {
        try {
            const pendingLeaves = await managerService.getAllPendingLeaves();
            res.status(200).json(pendingLeaves);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async approveLeaveHandler(req: Request, res: Response) {
        try {
            const leaveId = parseInt(req.params.leaveId);
            const massage = await managerService.approveLeave(leaveId);
            res.status(200).json(massage);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    async rejectLeaveHandler(req: Request, res: Response) {
        try {
            const leaveId = parseInt(req.params.leaveId);
            const massage = await managerService.rejectLeave(leaveId);
            res.status(200).json(massage);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
    
}

export const managerController = new ManagerController();