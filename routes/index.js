var express = require("express");
var router = express.Router();

const movie = require("../data/movies");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("index", { title: "Express" });
});

//route for getting the most popular movies (GET /most_popular)
//http://localhost:3000/most_popular?api_key=123456789
router.get("/most_popular", (req, res, next) => {
  let page = req.query.page;
  if (!req.query.page) page = 1;

  let popularMovies = movie.filter((obj) => obj.most_popular);
  popularMovies = popularMovies.slice((page - 1) * 20, (page - 1) * 20 + 19);
  res.json(popularMovies);
});

module.exports = router;
