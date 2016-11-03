var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var path       = require('path');
var config     = require('./config.js'); //prod sql auth will go here
var app        = expxress();
var router = express.Router();
var port = process.env.PORT || 8080;


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : config.mysql_local.user_name,
  password : config.mysql_local.password
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Test route for homepage
app.use(express.static(path.join(__dirname,'FrontEnd'))); //FrontEnd/public

app.use('/',function(req,res){
  res.sendFile('index.html');
});
//app.use(require('./routes/orgs'));
//app.use(require('./routes/events'));
//app.use(require('./routes/users'));


//put more routes here

//Register Routes
//app.use(express.static(__dirname + '/FrontEnd'));
//app.use('/', router);

app.listen(port);
console.log('FreeLabor API Serving on port ' + port);
