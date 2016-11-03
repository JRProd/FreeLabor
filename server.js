var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var path       = require('path');
var config     = require('./config.js'); //prod sql auth will go here
//requires for sessions
var session = require('express-session');
var MySQLServerStore = require('express-mysql-session')(session);
//end of session-specific requires
var app        = expxress();
var router = express.Router();
var port = process.env.PORT || 8080;

var options = {
    host: 'localhost',
    port: 3306,
    user: 'session_user',
    password: 'password',// Password for the above database user. 
    database: 'session_test',// Database name. 
    checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds. 
    expiration: 86400000,// The maximum age of a valid session; milliseconds. 
    createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist. 
    connectionLimit: 1,// Number of connections when creating a connection pool 
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'userID'
        }
    }
};

var sessionStore = new MySQLStore(options);

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
