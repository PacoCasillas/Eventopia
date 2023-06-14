const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Event } = require("../models");

// GET ALL EVENTS -> http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll();
    const events = eventData.map((event) => event.get({ plain: true }));
    res.render("homepage", {
      events,
      logged_in: req.session.logged_in, // to determine whether or not to display the login/logout links in the header
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
