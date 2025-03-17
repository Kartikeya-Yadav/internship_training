import { Response } from "express";
import { Request } from "express";
import { fetchAllLeaves } from "../services/leaveService";


export const getUsersHandler = async (req: Request, res: Response) => {
    try {
        const users = await fetchAllLeaves();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
