const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/users', userController.getAllUsersHandler);
router.get('/users/:id', userController.getUserHandler);

router.post('/users', userController.postUserHandler);
router.put('/users/:id', userController.updateUserHandler)

router.delete('/users/:id', userController.deleteUserHandler);

module.exports = router;