const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongo = require('mongoose');

const db = mongo.connect('', function(err, response){
    if(err){console.log(err);}
    else{console.log('Connected to ' + db, ' + ', response);}
});

const app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit : '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

