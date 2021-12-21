const { Department } = require("../models");

const departmentData = [
  {
    department_name: "Grocery",
  },
  {
    department_name: "Dairy",
  },
  {
    department_name: "Frozen",
  },
  {
    department_name: "Produce",
  },
  {
    department_name: "Meat",
  },
];

const seedDepartment = () => Department.bulkCreate(departmentData);

module.exports = seedDepartment;
