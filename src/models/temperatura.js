const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Project2 = sequelize.define(
  "temperatura",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    temperatura: {
      type: DataTypes.FLOAT,
    },
    fecha: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "temperatura",
  }
);

module.exports = { Project2 };
