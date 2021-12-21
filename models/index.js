const Aisle = require("./Aisle");
const Department = require("./Department");
const Product = require("./Product");
const User = require("./User");

Product.belongsTo(Aisle, {
  foreignKey: "aisle_id",
});
Aisle.hasMany(Product, {
  foreignKey: "aisle_id",
});

Product.belongsTo(Department, {
  foreignKey: "department_id",
});

Department.hasMany(Product, {
  foreignKey: "department_id",
});

module.exports = {
  Aisle,
  Department,
  Product,
  User,
};
