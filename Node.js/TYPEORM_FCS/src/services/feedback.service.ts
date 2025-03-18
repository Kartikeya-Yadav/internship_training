import { Feedback } from "../entities/feedback";
import { FeedbackRepository } from "../repository/feedback.repository";

export class FeedbackService {
    static async addFeadback(feedback: Feedback) {
        try {
            await FeedbackRepository.addFeadback(feedback);
            return "Feedback Saved Successfully !"
        } catch (err) {
            throw err;
        }

    }

    static async getAllFeadbacks() {
        try {
            const result = await FeedbackRepository.getAllFeadbacks();
            return result;
        } catch (err) {
            throw err;
        }

    }

    static async getFeadback(id: number) {
        try {
            const result = await FeedbackRepository.getFeadback(id);
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    }

    static async deleteFeadback(id: number){
        try{
            await FeedbackRepository.deleteFeadback(id);
            return "Feedback Deleted Successfully !";
        }catch(err){
            throw err;
        }
        
    }

    static async updateFeadback(id: number, feedback: Feedback){
        try{
            await FeedbackRepository.updateFeadback(id, feedback);
            return "Feedback Updated Successfully !";
        }catch(err){
            throw err;
        }
        
    }


}