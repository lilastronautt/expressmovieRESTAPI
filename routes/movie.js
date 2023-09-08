const express = require("express");
const movieRouter = express.Router();

const movieDetails = require("../data/movieDetails");

function requireJson(req, res, next) {
  if (!req.is("application/json")) {
    res.status(401);
    res.json("invalid content type");
  } else next();
}

movieRouter.param("top_rated", (req, res, next) => {
  res.redirect("/top_rated");
  next();
});

// route for getting top rated movies (GET /movie/top_rated)
//localhost:3000/movie/top_rated?api_key=123456789&page=1
http: movieRouter.get("/top_rated", (req, res, next) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  movieDetails.sort((a, b) => b.vote_average - a.vote_average);
  let indexStart = (page - 1) * 20;
  let pageMovieDetails = movieDetails.slice(indexStart, indexStart + 19);
  res.json(pageMovieDetails);
});

// route for posting movie rating usin movieId (POST /movie/movieId/rating)
movieRouter.post("/:movieId/rating", requireJson, (req, res, next) => {
  const movieRating = req.body.value;
  if (movieRating < 0.5 || movieRating > 10) {
    res.json("invalid rating provided");
  } else {
    res.json({ status_code: 200, msg: "thankyou for submitting rating" });
  }
});

// route for delete the rating (DELETE /movie/movieId/rating)
movieRouter.delete("/:movieId/rating", requireJson, (req, res, next) => {
  res.json({ status_code: 200, msg: "successfully deleted" });
});

// route for getting movie from movieId (GET /movie/movieId)
// http://localhost:3000/movie/137113?api_key=123456789
// also this should come last
http: movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId; // this is string
  const movie = movieDetails.filter((movies) => movies.id === Number(movieId));

  res.json(movie);
});

module.exports = movieRouter;
