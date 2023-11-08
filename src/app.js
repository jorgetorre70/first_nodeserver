require("dotenv").config();

const { sequelize } = require("./config/database");
const express = require("express");
const cors = require("cors");
const { router } = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1", router);

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.listen(PORT, () => {
    console.log("API esta lista!", PORT);
  });
}

main();
