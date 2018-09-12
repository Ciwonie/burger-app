var orm = require('../config/orm.js');

// THE MODEL HELPS US INTERFACE WITH THE DATABASE. 
// THIS IS OUR API THAT IS CREATED BASED ON THE MYSQL DATABASE.

var table = "burgers";

var burger = {
    //SELECTING ALL DATA FROM DATABASE
    selectAll: function(cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },
    insertOne: function(columns, values, cb) {
        orm.insertOne(table, columns, values, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne(table, objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete(table, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;