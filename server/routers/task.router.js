const express = require('express'); // import express module
const router = express.Router(); // declare router and set to express router

router.get('/', (req,res) => {
    res.sendStatus(200);
    console.log('get route');
})

module.exports = router;