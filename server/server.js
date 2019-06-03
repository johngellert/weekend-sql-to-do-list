// import express module
const express = require('express');
const app = express(); // declare app and set to express application
const PORT = 5000; // declare PORT for server to listen

// import routers
const taskRouter = require('./routers/task.router.js');
app.use('/tasks', taskRouter); // router for /task route

//app.use(bodyParser.urlencoded({extended: true})); // need to handle data from client

// import static files from public folder
app.use(express.static('server/public'));


app.listen(PORT, () => {
    console.log('Running on port', PORT);
});