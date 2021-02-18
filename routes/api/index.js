const router = require("express").Router();
const menuRoutes = require("./menuRoutes");

// Post routes
router.use("/menuRoutes", menuRoutes);

module.exports = router;