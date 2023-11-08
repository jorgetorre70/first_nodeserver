const express = require("express");
const router = express.Router();
const {
  getList,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/temperatura");
const {
  getTemperatura,
  creaTemperatura,
  deleteTemperatura,
  updateTemperatura,
} = require("../services/temperatura");

router.get("/", getTemperatura);
router.post("/", creaTemperatura);
router.delete("/:id", deleteTemperatura);
router.put("/:id", updateTemperatura);

module.exports = router;
