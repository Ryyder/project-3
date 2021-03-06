
// const router = require("express").Router();
// const bookRoutes = require("./books");

// // Book routes
// router.use("/books", bookRoutes);

// const router = require("express").Router();
// const candidateRoutes = require("./candidates");

// // candidate routes
// router.use("/candidates", candidateRoutes);
const axios = require("axios");
const router = require("express").Router();

let name = //retrieve name from DB

router.get("/news/:name", (req, res) => {
  console.log(req.url)
  axios
    .get("https://newsapi.org/v2/everything?q="+req.params.name+"&apiKey="+ process.env.MY_API_KEY, )
    // if(res.data.totalResults === 0){
    //   axios
      // .get("https://newsapi.org/v2/everything?q=inslee&apiKey=a7f110578c3c478b87d1d9c4c0477600", { params: req.query })
      .then(({ data }) => res.send(data.articles))
      .catch(err => res.status(422).json(err));
    // }else{
    //   axios
    //   .then(({ data: { results } }) => res.json(results))
    //   .catch(err => res.status(422).json(err));
    // }
    
});


module.exports = router;
