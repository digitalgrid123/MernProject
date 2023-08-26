const app = require("./App");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS WORKING ON http://localhost:${process.env.PORT}`);
});
