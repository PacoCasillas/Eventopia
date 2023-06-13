const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attendees extends Model {}

Attendees.init(
  {
    // Define the columns for the Attendees model
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
    modelName: "attendees",
  }
);

module.exports = Attendees;
