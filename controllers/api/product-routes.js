const router = require("express").Router();
const { Product, Department, Aisle, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    productData = await Product.findAll({
      include: [
        {
          model: Aisle,
          attributes: ["aisle_name"],
        },
        {
          model: Department,
          attributes: ["department_name"],
        },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
