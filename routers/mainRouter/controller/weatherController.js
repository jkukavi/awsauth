const { IO, Status } = require("@reactor4/forklift");
const getWeatherReport = require("./helpers/getWeatherReport");

module.exports = async function weatherLogic(req, res, next) {
  const weatherReport = await getWeatherReport(req.body.city);
  IO.setCreated(res, weatherReport);
  next();
};
