const { StatusCodes } = require("http-status-codes");

const notFound = (err, next, res, req) => {
  if (err instanceof Error || err.status == 404) {
    res.status(StatusCodes.NOT_FOUND).json("Route Doesn't Exist");
  }
};
module.exports = notFound;
