const express = require('express'); // import express module
const router = express.Router(); // declare router and set to express router
const pool = require('../modules/pool.js'); // import pool module
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true})); // need to handle data from client


router.get('/', (req, res) => {
    pool.query('SELECT * FROM "todo" ORDER BY "id";').
    then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error with SELECT todo query', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    pool.query('INSERT INTO "todo" ("task", "priority") VALUES ($1, $2);', [req.body.task, req.body.priority]).
    then(() => {
        res.sendStatus(201); // send status created
    }).catch((error) => {
        console.log('Error with INSERT todo query', error);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    pool.query('UPDATE "todo" SET "is_complete"=true WHERE "id"=$1;', [req.params.id]).
    then(() => {
        res.sendStatus(200); // send status ok
    }).catch((error) => {
        console.log('Error with UPDATE todo query', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "todo" WHERE "id"=$1;', [req.params.id]).
    then(() => {
        res.sendStatus(200); // send status ok
    }).catch((error) => {
        console.log('Error with DELETE todo query', error);
        res.sendStatus(500);
    });
});

module.exports = router;