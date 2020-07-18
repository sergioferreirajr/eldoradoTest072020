var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
const cors = require('cors'); 

module.exports = function(){
    var app = express();
    app.use(cors());
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .then('persistence')
        .into(app);
    
    return app;
}