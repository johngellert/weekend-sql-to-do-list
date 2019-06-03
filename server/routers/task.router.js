const express = require('express'); // import express module
const router = express.Router(); // declare router and set to express router
const pool = require('../modules/pool.js'); // import pool module
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true})); // need to handle data from client


router.get('/', (req, res) => {
    pool.query('SELECT * FROM "todo";').
    then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error with SELECT todo query', error);
        res.sendStatus(500)
    });
});

router.post('/', (req, res) => {
    pool.query('INSERT INTO "todo" ("task", "priority") VALUES ($1, $2);', [req.body.task, req.body.priority]).
    then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with INSERT todo query', error);
        res.sendStatus(500)
    });
});

module.exports = router;