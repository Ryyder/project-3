const axios = require("axios");
const router = require("express").Router();

router.get("/news/:name", (req, res) => {
  console.log(req.url)
  axios
    .get("https://newsapi.org/v2/everything?q="+req.params.name+"&apiKey=a7f110578c3c478b87d1d9c4c0477600", )
      .then(({ data }) => res.send(data.articles))
      .catch(err => res.status(422).json(err));   
});


module.exports = router;
