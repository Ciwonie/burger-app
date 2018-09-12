// THE CONTROLLER IS GOING TO INTERFACE WITH THE MODEL AND VIEW. BRINGING EVERYTHING TOGETHER IN PERFECT HARMONY

var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

// MAIN /BURGERS AS HOME
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

// SELECT ALL DATA FROM API AND RENDER 
router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// INSERTING NEW DATA
router.post('/burgers/insertOne', function(req,res) {
    burger.insertOne(['burger_name','devoured'], [req.body.burger_name, false], function() {
        console.log('in callback');
        res.redirect('/burgers');
    })
    console.log('after insert');
});

// UPDATING EXISTING DATA
router.put('/burgers/updateOne/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.updateOne({ devoured: req.body.devoured }, condition, function() {
        res.redirect('/burgers');
    });
});

// DELETING DATA
router.delete('/burgers/delete/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.delete(condition, function() {
        res.redirect('/burgers');
    });
});

// EXPORTNG THE FUNCTIONALITY
module.exports = router;