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

app.use("/message", messageRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

connect();


