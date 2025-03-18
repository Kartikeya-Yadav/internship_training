import { AppDataSource } from "../config/database";
import { Feedback } from "../entities/feedback";

export class FeedbackRepository {

    private static feedbackRepository = AppDataSource.getRepository(Feedback);

    static async addFeadback(feedback: Feedback){
        try{
            await this.feedbackRepository.save(feedback);
        }catch(err){
            throw err;
        }
        
    }

    static async getAllFeadbacks(){
        try{
            const result = await this.feedbackRepository.find();
            return result;
        }catch(err){
            throw err;
        }
        
    }

    static async getFeadback(id: number){
        try{
            const result = await this.feedbackRepository.findOneBy({id: id});
            if(!result){
                throw new Error("This Feedback does not exists !");
            }
            return result;
        }catch(err){
            throw err;
        }
        
    }


    static async deleteFeadback(id: number){
        try{
            const result = await this.getFeadback(id);
            await this.feedbackRepository.remove(result!);
        }catch(err){
            throw err;
        }
        
    }

    static async updateFeadback(feedbackId: number, feedback: Feedback){
        try{
            const result = await this.feedbackRepository.findOneBy({id: feedbackId});
            if(!result){
                throw new Error("This Feedback does not exists !");
            }
            const { id: _, userName, email, message, rating } = feedback;
            await this.feedbackRepository.update({id: feedbackId}, {userName, email, message, rating});
        }catch(err){
            throw err;
        }
        
    }




}