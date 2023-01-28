const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");

const messageRouter = require("./Routes/messageRoute");

app.use(cors());
app.use(bodyParser.json());


app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

connect();

app.use("/message", messageRouter);
