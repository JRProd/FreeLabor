var express = require('express');
var router = express.Router();
var responses = require('./responses.js');

router.get('/orgs/:username', function(req,res){
  //server logic to fetch "all" info about 
  var speaker = req.params.usernameOrg;
  res.setHeader('Content-Type', 'application/json');

  res.send(JSON.stringify({'param':speaker,'response':responses.getOrg}));

});

router.post('/orgs', function(request,response){
  //v
  res.send("Default response");
  //Server logic to create a user in the database
});


module.exports = router;
