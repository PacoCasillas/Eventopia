const router = require("express").Router();
const { Op } = require("sequelize");
const withAuth = require("../utils/auth");
const { Event, User, Favorites, Attendees } = require("../models");

// GET ALL EVENTS -> http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "cost",
        "capacity",
        "location",
        "startDate",
        "endDate",
        "startTime",
        "endTime",
      ],
      // FILTER TO DISPLAY ONLY FUTURE EVENTS -> EVENTS WHERE END DATE IS LESS THAN TODAY
      where: {
        endDate: {
          [Op.gte]: new Date(),
        },
      },
    });
    // it will contain plain JavaScript objects representing each post, instead of Sequelize model instances.
    const allEvents = eventData.map((event) => event.get({ plain: true }));
    res.render("homepage", {
      allEvents,
      // to determine whether or not to display the login/logout links in the header
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DASHBOARD -> http://localhost:3001/dashboard  -----> ADD withAuth
router.get("/dashboard", async (req, res) => {
  try {
    // const userId = req.session.user_id;
    // console.log(req.session.user_id);

    const dashboardData = await Event.findAll({
      // Fetch only posts created by the logged-in user
      // where: { created_by: userId },
      attributes: [
        "id",
        "title",
        "description",
        "cost",
        "capacity",
        "location",
        "startDate",
        "endDate",
        "startTime",
        "endTime",
      ],
      order: [["startDate", "DESC"]],
      include: [{ model: User }],
    });

    // const userEvents = dashboardData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      // userEvents,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CALENDAR -> http://localhost:3001/calendar
router.get("/calendar", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("calendar");
});

// LOGIN -> http://localhost:3001/login
router.get("/login", (req, res) => {
  console.log(req.body);
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

// SIGNUP -> http://localhost:3001/signup
router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'signup' template
  res.render("signup");
});

// FAVORITES -> http://localhost:3001/favorites
router.get("/favorites", async (req, res) => {
  try {
    // Commented out for future authentication implementation
    // if (!req.session.logged_in) {
    //   res.redirect("/login");
    //   return;
    // }

    // commented out for hen we have login user id 
    // const userId = req.session.user_id;

    // hardcoded user for testing purposes
    const userId = 2;

    // Fetch the user's favorites
    const favoritesData = await Favorites.findAll({
      where: {
        // user logged in 
        userId,
      },
      include: [
        {
          model: Event,
          attributes: ["title"],
        },
      ],
    });

    const favorites = favoritesData.map((favorite) =>
      favorite.Event.get({ plain: true })
    );

    // Fetch the events that the user is attending
    const attendingData = await Attendees.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: Event,
          attributes: ["title"],
        },
      ],
    });

    const attending = attendingData.map((attendee) =>
      attendee.Event.get({ plain: true })
    );

    res.render("favorites", {
      favorites,
      attending,
      // Commented out for future authentication implementation
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(/create-event/, async (req, res) => {
  try {
    res.render("createEvents");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
