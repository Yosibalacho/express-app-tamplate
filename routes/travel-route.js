const router = require("express").Router();
const {
  getTravel,
  createTravel,
  deleteTravel,
  getTravelById,
  updateTravel,
} = require("../controllers/travel-ctrl");
router.get("/", getTravel);
router.get("/getById/:id", getTravelById);
router.post("/create", createTravel);
router.put("/update/:id", updateTravel);
router.delete("/delete/:id", deleteTravel);

module.exports = router;
