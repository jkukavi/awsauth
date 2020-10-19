const router = require("express").Router();
const weatherIo = require("./schemas/weatherSchema");
const controller = require("./controller");

router.get("/", (req, res) => {
  res.send("Authenticated successfuly.");
});

router.post(
  "/weather",
  weatherIo.processRequest(),
  controller.weather,
  weatherIo.sendResponse({ skipNextOnSuccess: true })
);

module.exports = router;
