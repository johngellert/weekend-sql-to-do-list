const express = require('express'); // import express module
const router = express.Router(); // declare router and set to express router

// declare taskList and set to import from module task.js
const taskList = require('../modules/task.js');

router.get('/', (req,res) => {
    res.send(taskList);
})

module.exports = router;