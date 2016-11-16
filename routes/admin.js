var fs = require('fs');
var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var saltRounds = 10;

router.get('/admin/configuredb', function(req,res){
  //Check to make sure user is allowed access to
  var file = fs.readFileSync("./dbdump.sql", "utf8");
  console.log(file);

  function performQuery(query,data,callback) {
    req.db.query(query, data, function(err, rows, fields) {
      if (err) {
        callback(err, null);
      } else{
        callback(null, rows, fields);
      }
    });
  }

  performQuery(file, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      res.json({success:true});
    }
  });

});


module.exports = router;
