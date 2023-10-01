const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const connectDatabase = () => {
  console.log(process.env.DB_URI);
  mongoose
    .connect("mongodb://kamranahsan75:N0hE0n3uaVKRIDvB@ac-x5j8ovy-shard-00-00.3tkgsnk.mongodb.net:27017,ac-x5j8ovy-shard-00-01.3tkgsnk.mongodb.net:27017,ac-x5j8ovy-shard-00-02.3tkgsnk.mongodb.net:27017/?replicaSet=atlas-tw717k-shard-0&ssl=true&authSource=admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(
        `Connected to MongoDB online cluster ${data.connection.host} :)`
      );
    })
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
