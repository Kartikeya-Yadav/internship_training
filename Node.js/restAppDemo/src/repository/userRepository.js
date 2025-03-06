const { sql, poolPromise } = require("../config/dbConfig")

class UserRepository {
    async getAllUsers() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query("select * from users");
            return result.recordset;
        } catch (err) {
            console.log(err);
        }
    }

    async getUser(id) {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query(`select * from users where id = ${id}`);
            return result.recordset[0];
        } catch (err) {
            console.log(err);
        }
    }

    async postUser(user) {
        try {
            const pool = await poolPromise;
            await pool.request()
                .input('name', user.name)
                .input('profileId', user.profileId)
                .query(`insert into users (name, profileId) values (@name, @profileId)`);
        } catch (err) {
            console.log(err);
        }
    } 

    async deleteUser(id) {
        try {
            const pool = await poolPromise;
            await pool.request()
                .input('id', id)
                .query(`delete from users where id = @id`);
        } catch (err) {
            console.log(err);
        }
    }

    async updateUser(id, user) {
        try {
            const pool = await poolPromise;
            await pool.request()
                .input('id', id)
                .input('name', user.name)
                .input('profileId', user.profileId)
                .query("update users set name = @name, profileId = @profileId where id = @id")
        } catch (err) {
            console.log(err);
        }
    }
    

}

module.exports = new UserRepository();