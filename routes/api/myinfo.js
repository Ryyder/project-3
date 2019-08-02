const router = require("express").Router();
const myinfoController = require("../../controllers/myinfoController");

router.route("/myinfo")
  .get(myinfoController.findAll)

router.route("/myinfo/:state")
  .get(myinfoController.find);

module.exports = router;