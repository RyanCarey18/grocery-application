const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Aisle extends Model {}

Aisle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    aisle_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "aisle",
  }
);

module.exports = Aisle;
