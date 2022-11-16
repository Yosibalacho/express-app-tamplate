const router = require("express").Router();

const {
  createAirline,
  getAirline,
  deleteAirline,
  getAirlineById,
  updateAirline,
} = require("../controllers/airlines-ctrl");

router.get("/", getAirline);
router.get("/getById/:id", getAirlineById);
router.post("/create", createAirline);
router.put("/update/:id", updateAirline);
router.delete("/delete/:id", deleteAirline);
module.exports = router;
