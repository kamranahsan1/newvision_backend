const express = require("express");
const api = require(`./routes`);
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const cookieParser = require("cookie-parser");

const app = express();
var option = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//app.use(api);

router.get("/uploads/:image", (req, res) => {
  var image = req.params.image;
  res.sendFile(__dirname + "/uploads/" + image, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error " + err);
    }
  });
});

router.get("/", (req, res) => {
  res.status(200).json("working");
});

app.use(router);
module.exports = app;
