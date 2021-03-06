const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  // console.log('in genre router get route')

  const query = `SELECT * FROM genres`;
  pool.query(query)
    .then( result => {
      // console.log('genre router get result.rows', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});


module.exports = router;