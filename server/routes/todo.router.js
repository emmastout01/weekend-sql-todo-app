const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "todo"`;
    pool.query(queryText)
    .then(result => res.send(result.rows))
    .catch(err => {
        res.sendStatus(500);
        console.log(err)
    });
});

module.exports = router;