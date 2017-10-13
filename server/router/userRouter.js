const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/userController.js');

userRouter.get('/', userController.indexOfUsers);
userRouter.get('/:id', userController.findUser);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
