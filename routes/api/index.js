// const router = require("express").Router();
// const bookRoutes = require("./books");

// // Book routes
// router.use("/books", bookRoutes);

const router = require("express").Router();
const candidateRoutes = require("./candidates");

// candidate routes
router.use("/candidates", candidateRoutes);

module.exports = router;
