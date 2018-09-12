var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
var router = require('./controllers/burgers_controller.js')

// STATIC CONTENT
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

// OVERRIDE WITH POST HAVE ?_METHOD=DELETE
app.use(methodOverride('_method'));

//SETTING HANDLEBARS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);

//SETTING SERVER
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log(`App listening on http://localhost:${port}`)
})

// // TEST CONNECTION RESPONSE
// app.get('/', function(req, res) {
//     res.send(`<h1>hello world</h1>`)
// })

// // TEST MYSQL
// var connection = require('./config/connection.js');
