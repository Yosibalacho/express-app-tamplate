const { countries } = require("../models/countries-model");

const getTravel = (req, res) => {
  res.send(countries);
};
const createTravel = (req, res) => {
  countries.push(req.body.country);
  res.send({ massage: "country successfully added" });
};
const getTravelById = (req, res) => {
    const countryIndex = findUserIndex(req);
if(countryIndex>-1){
    res.send(countries[countryIndex])
}


};

const deleteTravel = (req, res) => {
    const countryIndex = findUserIndex(req);
if(countryIndex>-1){
    countries.splice(countryIndex,1)
}
res.send({massage:"country deleted"})
};


const updateTravel = (req,res) => {
  const countryIndex = findUserIndex(req);
  if (countryIndex > -1) {
    countries[countryIndex] = req.body.country;
    return res.send("success");
  }
  res.send("user not found");
};

function findUserIndex(req) {
  const countryItem = countries.find((country) => country.id == req.params.id);
  const startIndex = countries.indexOf(countryItem);
  return startIndex;
}
module.exports = {
  getTravel,
  deleteTravel,
  updateTravel,
  getTravelById,
  createTravel,
};
