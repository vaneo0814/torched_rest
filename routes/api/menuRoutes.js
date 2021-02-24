const router = require("express").Router();
const menuController = require("../../controllers/menuControllers");

// Matches with "/api/menu"
router
  .route("/")
  .get(menuController.findAll)
  .put(menuController.update)
  .post(menuController.create);

// Matches with "/api/menu/:id"
router
  .route("/:id")
  .get(menuController.findById)
  .delete(menuController.remove);

module.exports = router;