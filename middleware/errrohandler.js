const { StatusCodes } = require("http-status-codes");

const errorHandler = (req, res, err, next) => {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Something went wrong" });
};

module.exports = errorHandler;
