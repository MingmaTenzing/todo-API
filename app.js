require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRoute = require("./routes/route");
// const errorHandler = require("./middleware/errrohandler");
const notfound = require("./middleware/notfound");

app.use((err, next, res, req) => {
  console.log("peace");
});
app.use("/api/v1", taskRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(3000, () => {
      console.log("working on 3000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
