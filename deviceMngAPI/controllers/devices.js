const { check, validationResult } = require('express-validator');

module.exports = function(app){

    const dateStr = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
    });
    const dev_get_all = '/devices';
    const dev_post_new = '/devices/newdevice';
    const dev_delete_one = '/devices/:id';

    //GET ALL DEVICES
    app.get(dev_get_all, function(req, res){

        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        deviceDao.getAll(function(error, result){
            if(error){
                console.log(dateStr + ' - (GET:'+dev_get_all+') ERROR: List devices... ' + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (GET:'+dev_get_all+') SUCCESS: Listing devices... ');
                res.status(200).send(result)
            }
        });
        connection.end();
    });

    //NEW DEVICE
    app.post(dev_post_new, 
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
        var errors = validationResult(req);
        
        if (!errors.isEmpty()){
            console.log(dateStr + ' - (POST:'+dev_post_new+') ERROR: Validation errors before database persistence.');
            res.status(400).send(errors);
            return;
        }
        
        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        deviceDao.newDevice(device, categoryId, color, partNumber, function(error, result){
            if(error){
                console.log(dateStr + ' - (POST:'+dev_post_new+') ERROR: New Device creation error: ' + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (POST:'+dev_post_new+') SUCCESS: New Device criated at database with ID: ' + result.insertId);
                res.status(201).json(device)
            }
        });

        connection.end();
    });

    //DELETE CATEGORY BY ID
    app.delete(dev_delete_one, function(req, res){
        var devideId = req.params.id;

        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        deviceDao.delete(devideId, function(error){
            if(error){
                console.log(dateStr + ' - (DELETE:'+dev_delete_one+') ERROR: Device ID: ' + devideId + " was not deleted. " + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (DELETE:'+dev_delete_one+') SUCCESS: Device deleted from database: ' + devideId);
                res.status(200).json(devideId)
            }
        });
        connection.end();
    });
}

