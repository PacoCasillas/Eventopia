const router = require("express").Router();

const userRoutes = require("./userRoutes");
const eventRoutes = require("./event-routes");

router.use("/", userRoutes);

router.use("/events", eventRoutes);

module.exports = router;
