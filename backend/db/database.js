const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const connectDatabase = () => {
  console.log(process.env.DB_URI);
  mongoose
    .connect(process.env.DB_ADMIN_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `Connected to MongoDB online cluster ${data.connection.host} :)`
      );
    })
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
