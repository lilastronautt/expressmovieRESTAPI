const express = require("express");
const searchRouter = express.Router();

const movies = require("../data/movies");
const people = require("../data/people");

function queryRequired(req, res, next) {
  if (!req.query.query) {
    res.status(401);
    res.json({ msg: "query required" });
  } else next();
}

searchRouter.use(queryRequired);

// search movie using movie name (GET /search/movie)
// http://localhost:3000/search/movie?api_key=123456789&query=Spider
searchRouter.get("/movie", (req, res, next) => {
  const movieSearch = req.query.query;
  const movieData = movies.filter((movie) => {
    return (
      movie.overview.includes(movieSearch) || movie.title.includes(movieSearch)
    );
  });
  res.json(movieData);
});

// search movie using movie name (GET /search/movie)
// http://localhost:3000/search/person?api_key=123456789&query=Keaton
searchRouter.get("/person", (req, res, next) => {
  const personSearch = req.query.query;
  const peopleData = people.filter((people) =>
    people.name.includes(personSearch)
  );
  res.json(peopleData);
});

module.exports = searchRouter;
