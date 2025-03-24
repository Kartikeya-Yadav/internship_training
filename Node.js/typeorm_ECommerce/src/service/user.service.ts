import { AppDataSource } from "../config/database";
import { User } from "../entities/user";

export class UserServices {
    private static userRepository = AppDataSource.getRepository(User);

    static async registerUser(user: User) {
        console.log(user);
        
        await this.userRepository.save(user);
        console.log(user);

        return "User Registered Successfully !"
    }

    static async loginUser(user: Partial<User>){
        const checkUser = await this.userRepository.findOneBy({email: user.email});
        if(!checkUser){
            throw new Error("This user dose not exists !");
        }
        if(checkUser.email !== user.email){
            throw new Error("Invalid Password !");
        }
        // Generate token
        return "User Logged In Successfully !"
    }
}