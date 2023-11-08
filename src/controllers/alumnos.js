const {
  getAllAlumnos,
  modificaAlumno,
  creaAlumno,
} = require("../services/alumnos");

const getList = (req, res) => {
  //res.send({ data: "Datos recibidos" });
  res.send({ datos: getAllAlumnos() });
};
const updateItem = (req, res) => {
  res.send({ data: modificaAlumno() });
};
const createItem = (req, res) => {
  res.send({ data: creaAlumno() });
};
const deleteItem = (req, res) => {
  res.send({ data: "Eliminando Registro" });
};

module.exports = { getList, updateItem, createItem, deleteItem };
