const { Sequelize } = require("sequelize");
const fs = require("fs");

// Read the certificate file (use the correct path for your certificate file)
const rootCert = fs
  .readFileSync("./src/config/rds-ca-2019-root.pem")
  .toString();

const sequelize = new Sequelize("jorgedb", "jorge", "elpidio2", {
  host: "db-prueba.cma8p9oinom8.us-east-2.rds.amazonaws.com",
  //host: "localhost",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      ca: rootCert,
      require: true, // This will help you. But you will see nwe error
      //rejectUnauthorized: false, // This line will fix new error
    },
  },
});

exports.sequelize = sequelize;
