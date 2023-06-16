const router = require("express").Router();

const userRoutes = require("./userRoutes");
const eventRoutes = require("./event-routes");
const favoriteRoutes = require("./favorite-routes");

router.use("/", userRoutes);
router.use("/events", eventRoutes);
router.use("/favorites", favoriteRoutes);

module.exports = router;
