const router = require("express").Router();
const { Product, Department, Aisle, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    aisleData = await Aisle.findAll({
      include: [
        {
          model: Product,
          attributes: ["product_name", "price"],
        },
      ],
    });
    res.status(200).json(aisleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
