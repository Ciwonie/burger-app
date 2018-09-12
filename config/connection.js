var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '110960',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.log('error connection: ' + err.stack);
        return;
    }
    console.log(`Connected as id: ${connection.threadId}`)
})

module.exports = connection;