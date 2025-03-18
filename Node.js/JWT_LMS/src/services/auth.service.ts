import { AuthRepository } from "../repository/auth.repository"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = "secretKey";

export class AuthService {
    static async registerUser(user: any) {
        try {
            await AuthRepository.createUser(user);
            return `User Added Susscsfully`;
        } catch (err) {
            throw err;
        }
    }

    static async loginUser(userData: any) {
        try {
            const user = await AuthRepository.searchUserByMail(userData.email);
            if (!user) {
                throw new Error("User not Found !");
            }

            const isPasswordValid = await bcrypt.compare(userData.password, user.hash_password);
            if (!isPasswordValid) {
                throw new Error("Ivalid Password !");
            }

            const token = jwt.sign({ name: user.name, email: user.password, role: user.role }, secretKey, { expiresIn: "1h" });
            return { user, token };
        } catch (err) {
            throw err;
        }
    }
}