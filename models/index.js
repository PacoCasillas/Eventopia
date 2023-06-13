const Attendees = require("./Attendees");
const Event = require("./Event");
const Favorites = require("./Favorites");
const User = require("./User");

// Many to many associations between models
Event.belongsToMany(User, { through: Attendees, foreignKey: "eventId" });
User.belongsToMany(Event, { through: Attendees, foreignKey: "userId" });

User.belongsToMany(Event, { through: Favorites, foreignKey: "userId" });
Event.belongsToMany(User, { through: Favorites, foreignKey: "eventId" });

module.exports = {
  Attendees,
  Event,
  Favorites,
  User,
};
