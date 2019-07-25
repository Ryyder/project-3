const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/news");
const candidateRoutes = require("./api/candidates");

// API Routes
router.use("/api", apiRoutes);

router.use("/candidates", candidateRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
