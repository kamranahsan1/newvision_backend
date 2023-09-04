const express = require("express");
const api = require(`./routes`);
const cors = require("cors");
const router = express.Router();

const app = express();
var option = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(option));
app.use(express.json());
app.use(`/api`, api);

router.get("/uploads/:image", (req, res) => {
  var image = req.params.image;
  res.sendFile(__dirname + "/uploads/" + image, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
  });
});

router.get("/", (req, res) => {
  res.status(200).json("working");
});

app.use(router);
module.exports = app;
