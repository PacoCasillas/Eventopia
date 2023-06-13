const Attendees = require("./Attendees");
const Event = require("./Event");
const Favorites = require("./Favorites");
const User = require("./User");

// Many to many associations between models

// An event is created by 1 user.

// An event can have many users associated with it
// and a user can attend many events
// Foreign key specifies that the attendees table is linked to an event
Event.belongsToMany(User, { through: Attendees, foreignKey: "eventId" });

// A user can have many events associated with it
// and an event can have many users
// Foreign key specifies that attendees table is linked to a user
User.belongsToMany(Event, { through: Attendees, foreignKey: "userId" });

// A user can have many favorite events
// and an event can be favorited by many users
// Foreign key specifies that favorites table is linked to a user
User.belongsToMany(Event, { through: Favorites, foreignKey: "userId" });

// An event can be favorited by many users
// and a user can have many favorites
// Foreign key specifies that favorites table is linked to an event
Event.belongsToMany(User, { through: Favorites, foreignKey: "eventId" });

module.exports = {
  Attendees,
  Event,
  Favorites,
  User,
};
