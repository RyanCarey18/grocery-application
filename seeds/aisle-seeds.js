const { Aisle } = require("../models");

const aisleData = [
  {
    aisle_name: 1,
  },
  {
    aisle_name: 2,
  },
  {
    aisle_name: 3,
  },
  {
    aisle_name: 4,
  },
  {
    aisle_name: 5,
  },
  {
    aisle_name: 6,
  },
  {
    aisle_name: 7,
  },
  {
    aisle_name: 8,
  },
  {
    aisle_name: 9,
  },
  {
    aisle_name: 10,
  },
  {
    aisle_name: 11,
  },
  {
    aisle_name: 12,
  },
  {
    aisle_name: 13,
  },
  {
    aisle_name: 14,
  },
  {
    aisle_name: 15,
  },
  {
    aisle_name: 16,
  },
  {
    aisle_name: 17,
  },
  {
    aisle_name: 18,
  },
  {
    aisle_name: 19,
  },
  {
    aisle_name: 20,
  },
  {
    aisle_name: 21,
  },
  {
    aisle_name: "Back Main Aisle",
  },
];

const seedAisle = () => Aisle.bulkCreate(aisleData);

module.exports = seedAisle;
