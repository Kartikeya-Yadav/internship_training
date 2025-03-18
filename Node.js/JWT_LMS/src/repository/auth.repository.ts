import { ConnectionPool } from "mssql";
import { poolPromise } from "../config/dbConfig";
import bcrypt from "bcrypt";

export class AuthRepository {
    static async createUser(user: any) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(user.password, salt);

            const pool = await poolPromise;
            await (pool as ConnectionPool)
                .request()
                .input("name", user.name)
                .input("email", user.email)
                .input("role", user.role)
                .input("hash_password", hashPassword)
                .query("insert into LMS_Users(name, email, role, hash_password) values (@name, @email, @role, @hash_password)");
        } catch (err) {
            throw err;
        }

    }

    static async searchUserByMail(email: any) {
        try {
            const pool = await poolPromise;
            const result = await (pool as ConnectionPool)
                .request()
                .input("email", email)
                .query("select * from LMS_Users where email = @email");
            
            return result.recordset[0];
        } catch (err) {
            throw err;
        }

    }

}



