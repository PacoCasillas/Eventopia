const { Event } = require("../models");

const eventData = [
  {
    title: "Ribfest",
    description: "The event that brings everyone together... BBQ!",
    cost: 9.99,
    capacity: 100,
    startDate: "2023-07-01",
    endDate: "2023-07-04",
    location: "Victoria Park",
    startTime: "02:00",
    endTime: "10:00",
    created_by: 1,
  },
  {
    title: "Hogs for Hospice",
    description: "Fundraiser for the founders of our community.",
    cost: 4.99,
    capacity: 80,
    startDate: "2023-07-02",
    endDate: "2023-07-02",
    location: "Seacliff Park",
    startTime: "10:00",
    endTime: "22:00",
    created_by: 1,
  },
  {
    title: "Summer Concert",
    description: "Summer concert at Seacliff Park Amphitheatre",
    cost: 2.99,
    capacity: 150,
    startDate: "2023-07-05",
    endDate: "2023-07-06",
    location: "Seacliff Park",
    startTime: "19:00",
    endTime: "22:00",
    created_by: 2,
  },
  {
    title: "Marina Patio Nights",
    description: "Enjoy a night on the Marina patio!",
    cost: 14.99,
    capacity: 50,
    startDate: "2023-08-07",
    endDate: "2023-08-07",
    location: "Municipal Marina",
    startTime: "17:00",
    endTime: "22:00",
    created_by: 3,
  },
  {
    title: "Arts at the Marina",
    description:
      "The Arts Centre proudly presents its 29th annual Arts @ the Marina outdoor arts and crafts show.",
    cost: 1.99,
    capacity: 75,
    startDate: "2023-08-10",
    endDate: "2023-08-14",
    location: "Municipal Marina",
    startTime: "12:00",
    endTime: "19:00",
    created_by: 4,
  },
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
