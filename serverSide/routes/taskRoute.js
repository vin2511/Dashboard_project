const express = require('express');
const { getTask,getTaskById, addTask, updateTask, delTask } = require('../controller/task');
const taskRouter =  express.Router();

taskRouter.get('/task',getTask);
taskRouter.post('/task',addTask);
taskRouter.get('/task/:id',getTaskById)
taskRouter.put('/task/:id',updateTask);
taskRouter.delete('/task/:id',delTask);


module.exports = taskRouter;