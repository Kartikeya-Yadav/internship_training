import { Request, Response } from "express";
import { User } from "../entities/user";
import { UserServices } from "../service/user.service";

export class UserController {

    static async registerUserHandler(req: Request, res: Response) {
        try {
            const user: User = req.body;
            const result = await UserServices.registerUser(user);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ err: (error as Error).message });
        }
    }

    static async loginUserHandler(req: Request, res: Response) {
        try {
            const user: User = req.body;
            const result = await UserServices.loginUser(user);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ err: (error as Error).message });
        }
    }
}