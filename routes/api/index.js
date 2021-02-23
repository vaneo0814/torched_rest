const router = require("express").Router();
const menuRoutes = require("./menuRoutes");

// Post routes
router.use("/menu", menuRoutes);

module.exports = router;