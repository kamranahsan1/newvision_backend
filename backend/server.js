const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/database");
const insertData = require("./models/Data/Insert");
const port = process.env.PORT || 5000;
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();
insertData();

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is working on http://${host}:${port}`);
});
