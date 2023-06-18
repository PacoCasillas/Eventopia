const router = require("express").Router();
const { Favorites } = require("../../models");

// POST new favorite to favorites DB
router.post("/", async (req, res) => {
  try {
    // Get the user ID from the session (session)
    const userId = req.session.user_id;

    // Get the event ID from ther request body (button click)
    const eventId = req.body.event_id;

    // Create a new entry in the Favorites table
    await Favorites.create({ userId, eventId });

    res.status(200).json({ message: "You favorited an event!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
