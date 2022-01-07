const router = require("express").Router();
const { Product } = require("../../models");

router.post("/", async (req, res) => {
  try {
    req.session.save(() => {
      if (req.session.cart) {
        req.session.cart.push(req.body.product_id);
      } else {
        req.session.cart = [req.body.product_id];
      }

      res.status(200).json({ message: "shopping" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cartData = await Product.findAll({
      where: { id: req.session.cart },
    });
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
