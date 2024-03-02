const task = require("../controllers/task");
const express = require("express");
const router = express.Router();

router.route("/").post(task);

module.exports = router;
