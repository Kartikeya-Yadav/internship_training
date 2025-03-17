import { Router } from "express";
import { getUsersHandler } from "../controllers/leaveController";

export const router: Router = Router();

router.get('/leaves',getUsersHandler);

