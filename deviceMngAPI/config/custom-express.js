var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
const cors = require('cors'); 

module.exports = function(){
    var app = express();
    app.use(cors());
    
    app.use(bodyParser.json({ 
        limit: "50mb", 
        type: (req) => req.headers["content-type"].includes("application/json") 
    }));
    
    app.use(
        bodyParser.urlencoded({
            extended: true,
            parameterLimit: 10000,
            limit: 1024 * 1024 * 10
        })
    );

    consign()
        .include('controllers')
        .then('persistence')
        .into(app);
    
    return app;
}