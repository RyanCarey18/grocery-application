const seedDepartment = require(".//department-seeds");
const seedAisle = require("./aisle-seeds");
const seedProduct = require("./product-seeds");
const seedUser = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedDepartment();
  console.log("\n----- Departments Are SEEDED -----\n");

  await seedAisle();
  console.log("\n----- AISLES ARE SEEDED -----\n");

  await seedProduct();
  console.log("\n----- PRODUCTS ARE SEEDED -----\n");

  await seedUser();
  console.log("\n----- USERS ARE SEEDED -----\n");

  process.exit(0);
};

seedAll();
