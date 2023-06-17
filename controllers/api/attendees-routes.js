const router = require("express").Router();
const e = require("express");
const { Attendees } = require("../../models");

// POST new attendee to Attendees DB
router.post("/", async (req, res) => {
  try {
    // Get the user ID from the session (session)
    const userId = req.session.user_id;

    // Get the event ID from ther request body (button click)
    const eventId = req.body.event_id;

    // Create a new entry in the Attendees table
    await Attendees.create({ userId, eventId });

    res.status(200).json({ message: "You are now attending this event!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
