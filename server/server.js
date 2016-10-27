var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

//Test route for homepage
router.get('/', function(req, res) {
  res.json({ message:" You are accessing a REST API" });   
});

//put more routes here

//Register Routes
app.use('/', router);

app.listen(port);
console.log('FreeLabor API Serving on port ' + port);
