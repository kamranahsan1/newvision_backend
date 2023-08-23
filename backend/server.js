const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./db/database");
const insertData = require("./models/Data/Insert");

dotenv.config({ path: "backend/config/config.env" });

const startServer = async () => {
  await connectDatabase();
  await insertData();
  const server = app.listen(process.env.PORT, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is working on http://${host}:${port}`);
  });
};

startServer();
