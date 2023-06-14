const { Attendees } = require("../models");

const attendeesData = [
  {
    eventID: 1,
    userId: 1,
  },
  {
    eventID: 1,
    userId: 2,
  },
  {
    eventID: 1,
    userId: 4,
  },
  {
    eventID: 2,
    userId: 2,
  },
  {
    eventID: 2,
    userId: 4,
  },
  {
    eventID: 3,
    userId: 2,
  },
  {
    eventID: 3,
    userId: 4,
  },
  {
    eventID: 3,
    userId: 5,
  },
  {
    eventID: 4,
    userId: 3,
  },
  {
    eventID: 5,
    userId: 1,
  },
  {
    eventID: 5,
    userId: 5,
  },
];

const seedAttendees = () => Attendees.bulkCreate(attendeesData);

module.exports = seedAttendees;
