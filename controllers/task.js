const task = require("../models/tasks");
const { StatusCodes } = require("http-status-codes");

const createTask = async (req, res) => {
  const createdTask = await task.create({
    title: "go for run",
    description: "peace",
  });
  if (createdTask) {
    res.status(StatusCodes.OK).json(createdTask);
  }
};

const deleteTask = async (req, res) => {
  const removeTask = await task.findOneAndDelete({
    _id: "65e29df6d0f6acff2786538a",
  });
  if (removeTask) {
    res.status(StatusCodes.OK).json(removeTask);
  }
};

module.exports = { createTask, deleteTask };
