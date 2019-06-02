const express = require('express');
const app = express();
const PORT = 5000;

//app.use(bodyParser.urlencoded({extended: true})); // need to handle data from client

app.use(express.static('server/public')); // imports static files from public folder

app.listen(PORT, () => {
    console.log('Running on port', PORT);
});