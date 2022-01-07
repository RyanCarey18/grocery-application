const router = require("express").Router();
const productRoutes = require("./product-routes");
const departmentRoutes = require("./departmentRoutes");
const aisleRoutes = require("./aisle-routes");
const cartRoutes = require("./cartRoutes");

router.use("/products", productRoutes);
router.use("/departments", departmentRoutes);
router.use("/aisles", aisleRoutes);
router.use("/cart", cartRoutes);
module.exports = router;
