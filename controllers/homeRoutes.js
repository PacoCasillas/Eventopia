const router = require("express").Router();
const { Op } = require("sequelize");
const withAuth = require("../utils/auth");
const { Event, User } = require("../models");

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
      // FILTER FOR PAST EVENTS WHERE END DATE IS LESS THAN TODAY
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

// DASHBOARD -> http://localhost:3001/dashboard
// ADD withAuth
router.get("/dashboard", async (req, res) => {
  try {
    // const userId = req.session.user_id;
    // console.log(req.session.user_id);

    // const dashboardData = await Event.findAll({
    //   where: { user_posts_id: userId }, // Fetch only posts created by the logged-in user
    //   where: { user_id: userId },
    //   order: [["post_date", "DESC"]], // DO WE HAVE A POST_DATE COLUMN?
    //   include: [{ model: User }],
    // });

    // const userPosts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      // userPosts,
      // loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CALENDAR -> http://localhost:3001/calendar
router.get("/calendar", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
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
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  // Otherwise, render the 'signup' template
  res.render("signup");
});

// FAVORITES -> http://localhost:3001/favorites

module.exports = router;
