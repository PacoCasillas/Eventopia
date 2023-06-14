const { Favorites } = require("../models");

const favoritesData = [
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
    userId: 3,
  },
  {
    eventId: 2,
    userId: 3,
  },
  {
    eventId: 1,
    userId: 5,
  },
  {
    eventId: 4,
    userId: 1,
  },
  {
    eventId: 5,
    userId: 2,
  },
  {
    eventId: 5,
    userId: 4,
  },
];

const seedFavorites = () => Favorites.bulkCreate(favoritesData);

module.exports = seedFavorites;
