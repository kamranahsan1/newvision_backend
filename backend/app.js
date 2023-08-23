const express = require("express");
const api = require(`./routes`);
const cors = require("cors");

const app = express();
var option = {
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.102:3000",
    "http://192.168.70.74:3000",
  ],
  optionsSuccessStatus: 200,
};
app.use(cors(option));
app.use(express.json());
app.use(`/api`, api);

module.exports = app;
