const { check, validationResult } = require('express-validator');

module.exports = function(app){
    //GET ALL CATEGOTIES
    app.get('/categories', function(req, res){
        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        console.log('Listing categories...');
        categoryDao.getAll(function(error, result){
            if(error){
                console.log('ERROR: List categories... ' + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: Listing categories... ");
                res.status(200).send(result)
            }
        });
        connection.end();
    });

    //NEW CATEGORY
    app.post('/categories/newcategory', 
    [
        check('name', 'The NAME is required.').notEmpty(),
        check('name', 'The NAME must have maximum 128 letters').custom((value, {req}) => value.length <= 128)
    ],
    function(req, res){
        var category = req.body;
        let categoryName = category.name;
        
        var errors = validationResult(req);
        
        if (!errors.isEmpty()){
            console.log("ERROR: Validation errors before database persistence.");
            res.status(400).send(errors);
            return;
        }
        
        console.log('Creating a new category...');
        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        categoryDao.newCategory(category, categoryName, function(error, result){
            if(error){
                console.log('ERROR: New Category creation error: ' + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: New Category criated at database");
                res.status(201).json(category)
            }
        });
        connection.end();
    });

    //GET CATEGORY BY ID
    app.get("/categories/:id", [], function(req, res){
        var categoryId = req.params.id;

        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        categoryDao.findById(categoryId, function(error, result){
            if(error){
                console.log('ERROR: It was not possible do find Category (ID: ' + categoryId + ") " + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: Category found: " + categoryId);
                res.status(200).json(result)
            }
        });
        connection.end();
    });

    //DELETE CATEGORY BY ID
    app.delete("/categories/:id", function(req, res){
        var categoryId = req.params.id;

        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        categoryDao.delete(categoryId, function(error){
            if(error){
                console.log('ERROR: Category ID: ' + categoryId + " was not deleted. " + error);
                res.status(400).send(error);
            } else {
                console.log("SUCCESS: Category deleted from database: " + categoryId);
                res.status(200).json(categoryId)
            }
        });
        connection.end();
    });
}

