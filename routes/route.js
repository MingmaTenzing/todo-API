const { deleteTask, createTask } = require("../controllers/task");
const express = require("express");
const router = express.Router();

router.route("/").post(createTask).delete(deleteTask).update();

module.exports = router;
