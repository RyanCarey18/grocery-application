const router = require("express").Router();
const productRoutes = require("./product-routes");
const departmentRoutes = require("./departmentRoutes");
const aisleRoutes = require("./aisle-routes");
const usersRoutes = require("./users-routes");
const cartRoutes = require("./cartRoutes");

router.use("/products", productRoutes);
router.use("/departments", departmentRoutes);
router.use("/aisles", aisleRoutes);
router.use("/users", usersRoutes);
router.use("/cart", cartRoutes);
module.exports = router;
