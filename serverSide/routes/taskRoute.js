const express = require('express');
const { getTask, addTask, updateTask, delTask } = require('../controller/task');
const taskRouter =  express.Router();

taskRouter.get('/task',getTask);
taskRouter.post('/task',addTask);
taskRouter.put('/tasks/:taskId',updateTask);
taskRouter.delete('/tasks/:taskId',delTask);


module.exports = taskRouter;