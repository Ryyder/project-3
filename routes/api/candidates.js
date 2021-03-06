const router = require("express").Router();
const candidatesController = require("../../controllers/candidatesController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

router.route("/candidates/name")
  .get(candidatesController.findByCandidateName)

// Matches with "/api/candidates"
router.route("/candidates")
  .get(candidatesController.findAll)
// .then(({data}) => res.send(data))
// .catch(err => res.status(422).json(err));
// .post(candidatesController.create);

// Matches with "/api/candidates/:id"
router
  .route("/candidates/:id")
  .get(candidatesController.findById)
  .put(candidatesController.update)
// .delete(candidatesController.remove);



module.exports = router;