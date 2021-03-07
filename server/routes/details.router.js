const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// grab a movie by id
router.get('/:id', (req, res) => {

  let movieId = req.params.id;

  // query to grab movie details by id
  const query = 
    `SELECT * FROM "movies"
    WHERE "movies".id = ${movieId}`;
  pool.query(query)
    .then( result => {
      // console.log('genre router get result.rows', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

}); // end router.get

router.get('/genres/:id', (req, res) => {

  let movieId = req.params.id;

  // grab genre names for movie by id
  const query = 
  `SELECT "genres".name 
    FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
    JOIN genres ON "movies_genres".genre_id = "genres".id
    WHERE "movies".id = ${movieId}`;
  pool.query(query)
    .then( result => {
      // console.log('genre router get result.rows', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

}); // end router.get


module.exports = router;