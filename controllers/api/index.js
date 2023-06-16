const router = require("express").Router();

const userRoutes = require("./userRoutes");
const eventRoutes = require("./event-routes");
// const favoriteRoutes = require("./favorite-routes");
// const attendesRoutes = require("./attendees-routes");

router.use("/", userRoutes);
router.use("/events", eventRoutes);
// router.use("/favorites", favoriteRoutes);
// router.use("/attendees", attendesRoutes);

module.exports = router;
