const { check, validationResult } = require('express-validator');

module.exports = function(app){
    //GET ALL DEVICES
    app.get('/devices', function(req, res){
        console.log('Recebida a requisição de DEVICES na porta 3000');
        res.send('OK');
    });

    //NEW DEVICE
    app.post('/devices/newdevice', 
    [
        check('id', 'The ID is required').notEmpty(),
        check('category_id', 'The CATEGORY_ID is required.').notEmpty(),
        check('color', 'The COLOR must have only letters').custom((value, {req}) => /^[a-zA-Z]+$/.test(value)),
        check('color', 'The COLOR must have maximum 16 letters').custom((value, {req}) => value.length <= 16),
        check('partNumber', 'The PARTNUMBER must be a positive number').custom((value, {req}) => value > 0 && value <= 2147483647)
    ],
    function(req, res){
        var device = req.body;
        
        var errors = validationResult(req);
        
        if (!errors.isEmpty()){
            console.log("ERROR: Validation errors before database persistence.");
            res.status(400).send(errors);
            return;
        }
        
        console.log('Creating a new device...');
        var connection = app.persistence.connectionFactory();
        var deviceDao = new app.persistence.DeviceDao(connection);

        deviceDao.newDevice(device, function(error, result){
            if(error){
                console.log('ERROR: New Device creation error: ' + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: New Device criated at database");
                res.status(201).json(device)
            }
        });
    });
}

