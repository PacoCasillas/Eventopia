const router = require("express").Router();

const eventRoutes = require("./event-routes");

router.use("/events", eventRoutes);

module.exports = router;
