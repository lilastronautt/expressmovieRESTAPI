# expressmovieRESTAPI

1) api_key is must in query otherwise 401 error
2) all the data is stored locally and Db is not used
3) just clone and run nodemon to get started (npm i nodemon if there's an error)

express movie REST API
   1) index.js
    i) -route for getting the most popular movies (GET /most_popular)
       -https://localhost:3000/most_popular?api_key=123456789 

   2) movie.js
    i) top rated movies
       - route for getting top rated movies (GET /movie/top_rated)
       - https://localhost:3000/movie/top_rated?api_key=123456789&page=1
        
    ii) movie search using Movie ID
       - route for getting movie from movieId (GET /movie/movieId)
       - http://localhost:3000/movie/137113?api_key=123456789
      
    iii) POST method (test using postman)
      - route for posting movie rating using movieId (POST /movie/movieId/rating)
  
    iv) DELETE method (test using postman)
      - route for delete the rating (DELETE /movie/movieId/rating)

    3) search.js
     i) movie search using movie name
      - search movie using movie name (GET /search/movie)
      - http://localhost:3000/search/movie?api_key=123456789&query=Spider

     ii) actor search using name
      - search actor using movie name (GET /search/movie)
      - http://localhost:3000/search/person?api_key=123456789&query=Keaton
