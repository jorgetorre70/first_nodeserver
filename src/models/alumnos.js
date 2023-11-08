const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Project = sequelize.define(
  "listaalumnos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    calificacion: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Project };
// const listaalumnos = [
//   {
//     id: 1,
//     nombre: "ALONSO RODRIGUEZ MANUEL DE JESUS",
//     calificacion: 0,
//   },
//   {
//     id: 2,
//     nombre: "BARRIOS CEBALLOS ALEXANDER",
//     calificacion: 4,
//   },
//   {
//     id: 3,
//     nombre: "BAUTISTA MARTINEZ EMILIO",
//     calificacion: 2,
//   },
//   {
//     id: 4,
//     nombre: "BELTRAN VALDEZ JUAN ALEJANDRO",
//     calificacion: 5,
//   },
//   {
//     id: 5,
//     nombre: "BONILLA RAMIREZ EDUARDO LEONEL",
//     calificacion: 9,
//   },
//   {
//     id: 6,
//     nombre: "CAMPOS LONGORIA EMMA ZIREL KARINA",
//     calificacion: 9,
//   },
//   {
//     id: 7,
//     nombre: "COLLAZO RODRIGUEZ EFREN DE JESUS",
//     calificacion: 8,
//   },
//   {
//     id: 8,
//     nombre: "GALLEGOS ROMERO FERNANDO",
//     calificacion: 9,
//   },
//   {
//     id: 9,
//     nombre: "GARCIA GARCIA MANUEL DE JESUS",
//     calificacion: 2,
//   },
//   {
//     id: 10,
//     nombre: "GUILLEN ESPARZA CYNTHIA JACQUELINE",
//     calificacion: 2,
//   },
//   {
//     id: 11,
//     nombre: "JARAMILLO TORRES YAZMIN",
//     calificacion: 8,
//   },
//   {
//     id: 12,
//     nombre: "MARTINEZ PENA YELITZA",
//     calificacion: 1,
//   },
//   {
//     id: 13,
//     nombre: "MARTINEZ RODRIGUEZ CARLOS ERNESTO",
//     calificacion: 1,
//   },
//   {
//     id: 14,
//     nombre: "MARTINEZ RODRIGUEZ ITZEL QUETZALLY",
//     calificacion: 2,
//   },
//   {
//     id: 15,
//     nombre: "MONTOYA DIAZ DE LEON MYRIAM GUADALUPE",
//     calificacion: 10,
//   },
//   {
//     id: 16,
//     nombre: "NAVARRO VILLAGRANA ALBERTO",
//     calificacion: 7,
//   },
//   {
//     id: 17,
//     nombre: "NUNEZ VALDEZ FERNANDO JESUS",
//     calificacion: 2,
//   },
//   {
//     id: 18,
//     nombre: "OLAGUE RODRIGUEZ JIMENA GUADALUPE",
//     calificacion: 10,
//   },
//   {
//     id: 19,
//     nombre: "RANGEL MATA JORGE ALEJANDRO",
//     calificacion: 9,
//   },
//   {
//     id: 20,
//     nombre: "REYES PEREA ALONDRA DEL CARMEN",
//     calificacion: 3,
//   },
//   {
//     id: 21,
//     nombre: "SAUCEDO HERNANDEZ ERNESTO",
//     calificacion: 0,
//   },
//   {
//     id: 22,
//     nombre: "TRINIDAD VELAZQUEZ MIGUEL",
//     calificacion: 8,
//   },
//   {
//     id: 23,
//     nombre: "VALDES CASTANEDA FATIMA MARIA",
//     calificacion: 2,
//   },
//   {
//     id: 24,
//     nombre: "VERGARA RAUDALES OTONIEL ALBERTO",
//     calificacion: 0,
//   },
//   {
//     id: 25,
//     nombre: "ZAMBRANO DE LA TORRE MARTHA KARYME",
//     calificacion: 9,
//   },
// ];

// module.exports = { listaalumnos };
