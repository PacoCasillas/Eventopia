const sequelize = require("../config/connection");

const seedUsers = require("./userData");
const seedEvents = require("./eventData");
const seedAttendees = require("./attendeesData");
const seedFavorites = require("./favoritesData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedEvents();
  console.log("\n----- EVENTS SEEDED -----\n");

  await seedAttendees();
  console.log("\n----- ATTENDEES SEEDED -----\n");

  await seedFavorites();
  console.log("\n----- FAVORITES SEEDED -----\n");

  process.exit(0);
};

seedAll();
