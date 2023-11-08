const express = require("express");
const router = express.Router();
const {
  getList,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/alumnos");
const {
  getAllAlumnos,
  creaAlumno,
  deleteAlumno,
  updateAlumno,
} = require("../services/alumnos");

//router.get("/", getList);
//router.post("/", createItem);
//router.delete("/:id", deleteItem);
//router.put("/:id", updateItem);
router.get("/", getAllAlumnos);
router.post("/", creaAlumno);
router.delete("/:id", deleteAlumno);
router.put("/:id", updateAlumno);

module.exports = router;
