const express = require('express'); // import express module
const router = express.Router(); // declare router and set to express router
const pool = require('../modules/pool.js'); // import pool module

// declare taskList and set to import from module task.js
// taskList is an array of objects
let taskList = require('../modules/task.js');

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

    res.sendStatus(201);
});

module.exports = router;