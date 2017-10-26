// Variables - Dependencies
let express = require('express');
let burger = require('../models/burger.js');
let router = express.Router();

// GET - / redirects to index.hbs /burgers
router.get('/', function (request, response) {
    response.redirect('/burgers');
});


// GET - /burgers populates index.hbs with burger_db.burgers.(SELECT)
router.get('/burgers', function (request, response) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        response.render('index', hbsObject);
    });
});


// POST - /burgers/add return index.hbs
router.post('/burgers/add', function (request, response) {
    if ('burger_name' === true) {
        burger.insertBurger('burger_name', 'desc', 'cost', request.body.burger_name, function () {
            response.redirect('/burgers');
        });
    };
    if ('ing_name' === true) {
        burger.insertIng('ing_name', request.body.ing_name, function () {
            response.redirect('/burgers');
        });
    };
});


// PUT - /burgers/devour/:id return index.hbs
router.put('/burgers/devour/:id', function (request, response) {
    var condition = 'id = ' + request.params.id;
    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function () {
        response.redirect('/burgers');
    });
});

// Export - router
module.exports = router;