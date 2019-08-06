const router = require("express").Router();
const favoriteController = require("../../controllers/favoriteController");

router.route("/favorite")
  .get(favoriteController.findAll)

router.route("/favorite/:id")
  .get(favoriteController.findById);

router.route("/favorite/updatelike/candidate/:candidateID/user/:userID")
  .post(favoriteController.updateLike);

module.exports = router;