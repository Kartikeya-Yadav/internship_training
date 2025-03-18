import { Router } from "express";
import { FeedbackController } from "../controllers/feedback.controller";

export const feedbackRouter = Router();

feedbackRouter.post("/", FeedbackController.addFeadbackHandler);
feedbackRouter.get("/", FeedbackController.getAllFeadbacksHandler);
feedbackRouter.get("/:id", FeedbackController.getFeadbackHandler);
feedbackRouter.delete("/:id", FeedbackController.deleteFeadbackHandler);
feedbackRouter.put("/:id", FeedbackController.updateFeadbackHandler);
