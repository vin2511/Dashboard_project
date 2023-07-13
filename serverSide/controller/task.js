const Dashboard = require("../models/taskModel");

const getTask = async (req, res) => {
    try {
      const tasks = await Dashboard.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const addTask = async (req, res) => {
    try {
      const task = new Dashboard(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  const updateTask = async (req, res) => {
    try {
      const taskId = req.params.id;
      const updatedTask = await Dashboard.findByIdAndUpdate(taskId, req.body, {
        new: true,
      });
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const delTask =  async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = {getTask,addTask,updateTask,delTask}