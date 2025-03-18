import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async registerHandler(req: Request, res: Response) {
        try {
            const user = req.body;
            const result = await AuthService.registerUser(user);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }
    }

    static async loginHandler(req: Request, res: Response) {
        try {
            const userData = req.body;
            const result = await AuthService.loginUser(userData);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ error: (err as Error).message })
        }
    }
}