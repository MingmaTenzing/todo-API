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

module.exports = createTask;
