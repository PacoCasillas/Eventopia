const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorites extends Model {}

Favorites.init(
  {
    // Define the columns for the Favorites model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refereces: {
        model: "Event",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refereces: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favorites",
  }
);

module.exports = Favorites;
