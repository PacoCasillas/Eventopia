const { Event } = require("../models");

const eventData = [
  {
    id: "1",
    title: "Ribfest",
    description: "The event that brings everyone together... BBQ!",
    const: 9.99,
    time: "2:00 PM",
    date: "2023-07-01",
    capacity: 100,
    created_by: 1,
  },
  {
    id: "2",
    title: "Hogs for Hospice",
    description: "Fundraiser for the founders of our community.",
    const: 4.99,
    time: "10:00 AM",
    date: "2023-07-02",
    capacity: 80,
    created_by: 1,
  },
  {
    id: "3",
    title: "Summer Concert",
    description: "Summer concert at Seacliff Park Amphitheatre",
    const: 2.99,
    time: "7:00 PM",
    date: "2023-07-05",
    capacity: 150,
    created_by: 2,
  },
  {
    id: "4",
    title: "Marina Patio Nights",
    description: "Enjoy a night on the Marina patio!",
    const: 14.99,
    time: "5:00 PM",
    date: "2023-08-07",
    capacity: 50,
    created_by: 3,
  },
  {
    id: "5",
    title: "Arts at the Marina",
    description:
      "The Arts Centre proudly presents its 29th annual Arts @ the Marina outdoor arts and crafts show.",
    const: 1.99,
    time: "12:00 AM",
    date: "2023-08-10",
    capacity: 75,
    created_by: 4,
  },
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
