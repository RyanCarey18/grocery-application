const { Aisle } = require("../models");

const aisleData = [
  {
    aisle_name: "Aisle 1",
  },
  {
    aisle_name: "Aisle 2",
  },
  {
    aisle_name: "Aisle 3",
  },
  {
    aisle_name: "Aisle 4",
  },
  {
    aisle_name: "Aisle 5",
  },
  {
    aisle_name: "Aisle 6",
  },
  {
    aisle_name: "Aisle 7",
  },
  {
    aisle_name: "Aisle 8",
  },
  {
    aisle_name: "Aisle 9",
  },
  {
    aisle_name: "Aisle 10",
  },
  {
    aisle_name: "Aisle 11",
  },
  {
    aisle_name: "Aisle 12",
  },
  {
    aisle_name: "Aisle 13",
  },
  {
    aisle_name: "Aisle 14",
  },
  {
    aisle_name: "Aisle 15",
  },
  {
    aisle_name: "Aisle 16",
  },
  {
    aisle_name: "Aisle 17",
  },
  {
    aisle_name: "Aisle 18",
  },
  {
    aisle_name: "Aisle 19",
  },
  {
    aisle_name: "Aisle 20",
  },
  {
    aisle_name: "Aisle 21",
  },
  {
    aisle_name: "Back Main Aisle",
  },
];

const seedAisle = () => Aisle.bulkCreate(aisleData);

module.exports = seedAisle;
