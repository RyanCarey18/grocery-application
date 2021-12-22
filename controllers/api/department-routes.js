const router = require("express").Router();
const { Product, Department, Aisle, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    departmenttData = await Department.findAll({
      include: [
        {
          model: Product,
          attributes: ["product_name", "price"],
        },
      ],
    });
    res.status(200).json(departmenttData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
