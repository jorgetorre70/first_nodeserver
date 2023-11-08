const { Project } = require("../models/alumnos");

const getAllAlumnos = async (req, res) => {
  try {
    const data = await Project.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const creaAlumno = async (req, res) => {
  const { nombre, calificacion } = req.body;
  const nuevoalumno = await Project.create(
    {
      nombre,
      calificacion,
    },
    {
      fields: ["nombre", "calificacion"],
    }
  );
  return res.json(nuevoalumno);
};

const deleteAlumno = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await Project.findByPk(id);
    if (!alumno) {
      return res.status(404).send("Alumno not found");
    }
    await alumno.destroy();
    res.status(204).send(); // 204 No Content
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateAlumno = async (req, res) => {
  const { id } = req.params;
  const { nombre, calificacion } = req.body;
  try {
    const alumno = await Project.findByPk(id);
    if (!alumno) {
      return res.status(404).send("Alumno not found");
    }
    alumno.nombre = nombre || alumno.nombre;
    alumno.calificacion = calificacion || alumno.calificacion;
    await alumno.save();
    res.json(alumno);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getAllAlumnos, creaAlumno, deleteAlumno, updateAlumno };
