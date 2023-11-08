const {
  getTemperatura,
  modificaTemperatura,
  creaTemperatura,
} = require("../services/temperatura");

const getList = (req, res) => {
  //res.send({ data: "Datos recibidos" });
  res.send({ datos: getTemperatura() });
};
const updateItem = (req, res) => {
  res.send({ data: modificaTemperatura() });
};
const createItem = (req, res) => {
  res.send({ data: creaTemperatura() });
};
const deleteItem = (req, res) => {
  res.send({ data: "Eliminando Registro" });
};

module.exports = { getList, updateItem, createItem, deleteItem };
