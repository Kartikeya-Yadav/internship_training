import { Request, Response } from "express";
import { Feedback } from "../entities/feedback";
import { FeedbackService } from "../services/feedback.service";

export class FeedbackController {
    static async addFeadbackHandler(req: Request, res: Response) {
        try {
            const feedback: Feedback = req.body;
            const result = await FeedbackService.addFeadback(feedback);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }

    }

    static async getAllFeadbacksHandler(req: Request, res: Response) {
        try {
            const result = await FeedbackService.getAllFeadbacks();
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }

    }

    static async getFeadbackHandler(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await FeedbackService.getFeadback(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }

    }

    static async deleteFeadbackHandler(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await FeedbackService.deleteFeadback(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }

    }

    static async updateFeadbackHandler(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const feedback: Feedback = req.body;
            console.log(feedback);
            
            const result = await FeedbackService.updateFeadback(id, feedback);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message });
        }

    }




}