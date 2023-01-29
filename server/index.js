const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
const messageRouter = require("./routes/messageRoute");
const cors = require("cors");



app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/message", messageRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

connect();


