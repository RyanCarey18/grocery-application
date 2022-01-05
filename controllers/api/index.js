const router = require("express").Router();
const productRoutes = require("./product-routes");
const departmentRoutes = require("./departmentRoutes");
const aisleRoutes = require("./aisle-routes");

router.use("/products", productRoutes);
router.use("/departments", departmentRoutes);
router.use("/aisles", aisleRoutes);

module.exports = router;
