const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    req.session.save(() => {
      req.session.hello = true;
      if (req.session.cart) {
        if (!req.session.cart.includes(req.body.product_id)) {
          req.session.cart.push(req.body.product_id);
        }
      } else {
        req.session.cart = [req.body.product_id];
      }

      res.status(200).end();
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    req.session.save(() => {
      index = req.session.cart.indexOf(req.params.id);

      if (index > -1) {
        req.session.cart.splice(index, 1);
      }

      res.status(200).end();
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
