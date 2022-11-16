const { airlines } = require("../models/airline-companies-model");

const getAirline = (req, res) => {
  res.send({airlines,
    massage:"success"}
    );
};
const getAirlineById = (req, res) => {};
const createAirline = (req, res) => {};
const deleteAirline = (req, res) => {};
const updateAirline = (req, res) => {};

module.exports = {
  createAirline,
  deleteAirline,
  getAirline,
  getAirlineById,
  updateAirline,
};
