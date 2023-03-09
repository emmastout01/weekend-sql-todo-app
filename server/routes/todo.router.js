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

router.post('/', (req, res) => {
    let queryText = `INSERT into "todo" ("name", "complete") VALUES ($1, $2)`;
    console.log(req.body);
    pool.query(queryText, [req.body.name, req.body.complete])
    .then(result => res.sendStatus(201))
    .catch(err => {
        res.sendStatus(500);
        console.log(err)
    });
});

module.exports = router;