const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/database");
const insertCountry = require("./models/Data/Country");
const insertData = require("./models/Data/Insert");
const TourInsert = require("./models/Data/Tours");
const TourInsert2 = require("./models/Data/Tours2");
const TourInsert3 = require("./models/Data/Tours3");
const port = process.env.PORT || 5000;

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();
//insertCountry();
//insertData();
/*
TourInsert();
TourInsert2();
TourInsert3();
*/
const server = app.listen(port, () => {
  console.log(
    `Server is working on http://${server.address().address}:${
      server.address().port
    }`
  );
});
