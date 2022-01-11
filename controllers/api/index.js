const router = require("express").Router();
const usersRoutes = require("./users-routes");
const cartRoutes = require("./cartRoutes");
const contactRoutes = require("./contactRoutes");


router.use("/users", usersRoutes);
router.use("/cart", cartRoutes);
router.use("/contact",contactRoutes);

module.exports = router;
