var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var saltRounds = 10;

router.post('/org', function(req,res){
  //TODO: INPUT SANITATION
  var createOrg = 'INSERT INTO Org(nameOrg,usernameOrg,emailOrg,phoneOrg,hashOrg) VALUES(?,?,?,?,?)';
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var params = [req.body.name,req.body.username,req.body.email,req.body.phone,hash];

  function performQuery(query,data,callback) {
    req.db.query(query, data, function(err, rows, fields) {
      if (err) {
        callback(err, null);
      } else{
        callback(null, rows);
      }
    });
  }
  performQuery(createOrg,params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      res.json({success:true,message:rows,url:'http://localhost/org/'+req.body.username});
    }
  });
});

router.get('/org/:username', function(req,res){
  //TODO: INPUT SANITATION
  var sql = 'SELECT nameOrg,usernameOrg,emailOrg,phoneOrg FROM Org WHERE usernameOrg=?';
  var params = [req.params.username];

  function performQuery(query,data,callback) {
    req.db.query(query, data, function(err, rows, fields) {
      if (err) {
        callback(err, null);
      } else{
        callback(null, rows, fields);
      }
    });
  }
  performQuery(sql, params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      var responseObj = responses.getOrg;
      var toAdd = {
        success:true,
        url:'http://localhost/user/'+req.params.username,
        username:rows[0].usernameOrg,
        firstName:rows[0].nameOrg,
        lastName:rows[0].phoneOrg,
        email:rows[0].emailOrg
      };
      responseObj = Object.assign(responseObj,toAdd);
      res.json(responseObj);
    }
  });
});

router.post('/org/login', function(req,res){

  var selectUser = 'SELECT hashOrg FROM Org WHERE usernameOrg=?';
  var params = [req.body.username];
  function performQuery(query,data,callback) {
    req.db.query(query, data, function(err, rows, fields) {
      if (err) {
        callback(err, null,null);
      } else{
        callback(null, rows, fields);
      }
    });
  }

  performQuery(selectUser,params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      var result;
      if(bcrypt.compareSync(req.body.password,rows[0].hashOrg)){
        res.json({success:true,url:'http://localhost/org/'+req.body.username});
      } else {
        res.json({success:false,message:err});
      }

    }
  });
});



module.exports = router;
