const { check, validationResult } = require('express-validator');

module.exports = function(app){
    //GET ALL DEVICES
    app.get('/devices', function(req, res){

        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        console.log('Listing devices...');
        deviceDao.getAll(function(error, result){
            if(error){
                console.log('ERROR: List devices... ' + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: Listing devices... ");
                res.status(200).send(result)
            }
        });
        connection.end();
    });

    //NEW DEVICE
    app.post('/devices/newdevice', 
    [
        check('category_id', 'The CATEGORY_ID is required.').notEmpty(),
        check('color', 'The COLOR must have only letters').custom((value, {req}) => /^[a-zA-Z]+$/.test(value)),
        check('color', 'The COLOR must have maximum 16 letters').custom((value, {req}) => value.length <= 16),
        check('partNumber', 'The PARTNUMBER must be a positive number').custom((value, {req}) => value > 0 && value <= 2147483647)
    ],
    function(req, res){
        var device = req.body;
        var categoryId = req.body.category_id;
        var color = req.body.color;
        var partNumber = req.body.partNumber;
        // var device = JSON.parse(req.body);
        
        var errors = validationResult(req);
        
        if (!errors.isEmpty()){
            console.log("ERROR: Validation errors before database persistence.");
            res.status(400).send(errors);
            return;
        }
        
        console.log('Creating a new device...');
        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        deviceDao.newDevice(device, categoryId, color, partNumber, function(error, result){
            if(error){
                console.log('ERROR: New Device creation error: ' + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: New Device criated at database with ID: " + result.insertId);
                res.status(201).json(device)
            }
        });

        connection.end();
    });

    //DELETE CATEGORY BY ID
    app.delete("/devices/:id", function(req, res){
        var devideId = req.params.id;

        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        deviceDao.delete(devideId, function(error){
            if(error){
                console.log('ERROR: Device ID: ' + devideId + " was not deleted. " + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: Device deleted from database: " + devideId);
                res.status(200).json(devideId)
            }
        });
        connection.end();
    });
}

