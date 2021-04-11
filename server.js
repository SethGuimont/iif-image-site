//load express and start app
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const session = require('express-session');


//Middleware
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));



app.listen(3001, () => {
    console.log('Express server started at port :3001')
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

