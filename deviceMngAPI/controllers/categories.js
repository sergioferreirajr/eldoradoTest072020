const { check, validationResult } = require('express-validator');

module.exports = function(app){
    const dateStr = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
    });
    const cat_get_all = '/categories';
    const cat_post_new = '/categories/newcategory';
    const cat_get_one = '/categories/:id';
    const cat_delete_one = '/categories/:id';

    //GET ALL CATEGOTIES
    app.get(cat_get_all, function(req, res){
        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        // console.log('Listing categories...');
        categoryDao.getAll(function(error, result){
            if(error){
                console.log(dateStr + ' - (GET:'+cat_get_all+') ERROR: List categories... ' + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (GET:'+cat_get_all+') SUCCESS: Listing categories... ');
                res.status(200).send(result)
            }
        });
        connection.end();
    });

    //NEW CATEGORY
    app.post(cat_post_new, 
    [
        check('name', 'The NAME is required.').notEmpty(),
        check('name', 'The NAME must have maximum 128 letters').custom((value, {req}) => value.length <= 128)
    ],
    function(req, res){
        var category = req.body;
        let categoryName = category.name;
                
        var errors = validationResult(req);
        
        if (!errors.isEmpty()){
            console.log(dateStr + ' - (POST:'+cat_post_new+') ERROR: Validation errors before database persistence.');
            res.status(400).send(errors);
            return;
        }
        
        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);
        
        categoryDao.newCategory(category, categoryName, function(error, result){
            if(error){
                console.log(dateStr + ' - (POST:'+cat_post_new+') ERROR: New Category creation error: ' + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (POST:'+cat_post_new+') SUCCESS: New Category criated at database with ID: ' + result.insertId);
                res.status(201).json(category)
            }
        });
        connection.end();
    });

    //GET CATEGORY BY ID
    app.get(cat_get_one, [], function(req, res){
        var categoryId = req.params.id;

        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        categoryDao.findById(categoryId, function(error, result){
            if(error){
                console.log(dateStr + ' - (GET:'+cat_get_one+') ERROR: It was not possible do find Category (ID: ' + categoryId + ") " + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (GET:'+cat_get_one+') SUCCESS: Category found: ' + categoryId);
                res.status(200).json(result)
            }
        });
        connection.end();
    });

    //DELETE CATEGORY BY ID
    app.delete(cat_delete_one, function(req, res){
        var categoryId = req.params.id;

        var connection = app.persistence.connectionFactory();
        var categoryDao = new app.persistence.CategoryDao(connection);

        categoryDao.delete(categoryId, function(error){
            if(error){
                console.log(dateStr + ' - (DELETE:'+cat_delete_one+') ERROR: Category ID: ' + categoryId + " was not deleted. " + error);
                res.status(400).send(error);
            } else {
                console.log(dateStr + ' - (DELETE:'+cat_delete_one+') SUCCESS: Category deleted from database: ' + categoryId);
                res.status(200).json(categoryId)
            }
        });
        connection.end();
    });
}

