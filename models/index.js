const Attendees = require("./Attendees");
const Event = require("./Event");
const Favorites = require("./Favorites");
const User = require("./User");

// One to Many associations between models

// A USER can create many EVENT(s)
User.hasMany(Event, { foreignKey: "created_by", onDelete: "CASCADE" });

// USER(s) makes EVENT(s)
Event.belongsTo(User, { foreignKey: "created_by" });
// USER(s) chooses Favorites
Favorites.belongsTo(User, { foreignKey: "userId" });
// EVENT(s) are Favorites
Favorites.belongsTo(Event, { foreignKey: "eventId" });
// USER(s) choose to Attend
Attendees.belongsTo(User, { foreignKey: "userId" });
// EVENT(s) are Attended
Attendees.belongsTo(Event, { foreignKey: "eventId" });

// Many to many associations between models

// A USER can have many EVENTS
// and an EVENT can have many ATTENDEES
User.belongsToMany(Event, { through: Attendees, foreignKey: "userId" });

// A USER can have many EVENTS
// and an EVENT can be favorited by many USERS
User.belongsToMany(Event, { through: Favorites, foreignKey: "userId" });

// An EVENT can host many USERS
// and a USER can attend many EVENTS
Event.belongsToMany(User, { through: Attendees, foreignKey: "eventId" });

// An EVENT can be favorited by many USERS
// and a USER can have many FAVORITES
Event.belongsToMany(User, { through: Favorites, foreignKey: "eventId" });

module.exports = {
  Attendees,
  Event,
  Favorites,
  User,
};
