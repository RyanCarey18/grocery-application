const router = require("express").Router();
const usersRoutes = require("./users-routes");
const cartRoutes = require("./cartRoutes");


router.use("/users", usersRoutes);
router.use("/cart", cartRoutes);
module.exports = router;
