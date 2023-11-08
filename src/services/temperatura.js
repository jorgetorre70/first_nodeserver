const { Project2 } = require("../models/temperatura");

const getTemperatura = async (req, res) => {
  try {
    const data = await Project2.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const creaTemperatura = async (req, res) => {
  const { temperatura, fecha } = req.body;
  const nuevatemperatura = await Project2.create(
    {
      temperatura,
      fecha,
    },
    {
      fields: ["temperatura", "fecha"],
    }
  );
  return res.json(nuevatemperatura);
};

const deleteTemperatura = async (req, res) => {
  const { id } = req.params;
  try {
    const temperatura = await Project2.findByPk(id);
    if (!temperatura) {
      return res.status(404).send("Temperatura not found");
    }
    await temperatura.destroy();
    res.status(204).send(); // 204 No Content
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateTemperatura = async (req, res) => {
  const { id } = req.params;
  const { temperatura, fecha } = req.body;
  try {
    const temperatura = await Project2.findByPk(id);
    if (!temperatura) {
      return res.status(404).send("Temperatura not found");
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

module.exports = {
  getTemperatura,
  creaTemperatura,
  deleteTemperatura,
  updateTemperatura,
};
