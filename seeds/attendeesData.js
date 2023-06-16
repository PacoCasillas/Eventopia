const { Attendees } = require("../models");

const attendeesData = [
  {
    eventId: 1,
    userId: 1,
  },
  {
    eventId: 1,
    userId: 2,
  },
  {
    eventId: 1,
    userId: 4,
  },
  {
    eventId: 2,
    userId: 2,
  },
  {
    eventId: 2,
    userId: 4,
  },
  {
    eventId: 3,
    userId: 2,
  },
  {
    eventId: 3,
    userId: 4,
  },
  {
    eventId: 3,
    userId: 5,
  },
  {
    eventId: 4,
    userId: 3,
  },
  {
    eventId: 5,
    userId: 1,
  },
  {
    eventId: 5,
    userId: 5,
  },
];

const seedAttendees = () => Attendees.bulkCreate(attendeesData);

module.exports = seedAttendees;
