const userService = require('../services/userService');

class UserController {
    async getAllUsersHandler(req, res) {
        try {
            const users = await userService.fetchAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserHandler(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.fetchUser(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async postUserHandler(req, res) {
        try {
            const user = req.body;
            await userService.postUser(user);
            res.status(200).json("User Added");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUserHandler(req, res) {
        try {
            const { id } = req.params;
            await userService.deleteUser(id);
            res.status(200).json("User Deleted");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUserHandler(req, res) {
        try{
            const { id } = req.params;
            const user = req.body;
            await userService.updateUser(id, user);
            res.status(200).json("User Updated");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();