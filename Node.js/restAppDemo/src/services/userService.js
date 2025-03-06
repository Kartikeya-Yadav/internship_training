const userRepository = require("../repository/userRepository")

class UserService {
    async fetchAllUsers() {
        try {
            const users = await userRepository.getAllUsers();
            return users;
        } catch (error) {
            throw new Error('Failed to fetch users');
        }
    }

    async fetchUser(id) {
        try {
            const user = await userRepository.getUser(id);
            if (!user) {
                console.log("User Not Found!");
                return "User Not Found!";
            }
            return user;
        } catch (error) {
            throw new Error('Failed to fetch user');
        }
    }

    async postUser(user) {
        try {
            await userRepository.postUser(user);
        } catch (error) {
            throw new Error('Failed to Post user');
        }
    }

    async deleteUser(id) {
        try {
            await userRepository.deleteUser(id);
        } catch (error) {
            throw new Error('Failed to Delete User');
        }
    }

    async updateUser(id, user) {
        try {
            await userRepository.updateUser(id, user);
        } catch (error) {
            throw new Error('Failed to Update User');
        }
    }

}

module.exports = new UserService();