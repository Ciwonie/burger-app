var connection = require('./connection.js');

function printQuestionMarks(num) {
    var array = [];
    for (i in num) {
        array.push('?');
    }
    return array.toString();
};

function objToSql(ob) {
    var array = [];
    for (key in ob) {
        if (ob.hasOwnProperty(key)) {
            array.push(key + '=' + ob[key]);
        }
    }
    return array.toString();
};

// TAKING ALL DATA FROM MYSQL DATABASE: BURGERS_DB
// orms represent many functions within an object.
var orm = {
    selectAll: function (table, callback) {
        var queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    insertOne: function (table, columns, values, callback) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += columns.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(values.length);
        queryString += ') ';

        connection.query(queryString, values, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    updateOne: function(table, objColVals, condition, callback) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    delete: function(table, condition, callback) {
        var queryString = 'DELETE FROM ' + table;
        queryString += ' WHERE ';
        queryString += condition;
        
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;