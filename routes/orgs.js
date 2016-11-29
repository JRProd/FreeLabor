var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var mysql = require('mysql');

function performQuery(req,query,data,callback) {
  req.db.query(query, data, function(err, rows, fields) {
    if (err) {
      callback(err, null,null);
    } else{
      callback(null, rows,fields);
    }
  });
}

router.post('/org', function(req,res){
  //TODO: INPUT SANITATION
  var createOrg = 'INSERT INTO Org(nameOrg,usernameOrg,emailOrg,phoneOrg,hashOrg) VALUES(?,?,?,?,?)';
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var params = [req.body.name,req.body.username,req.body.email,req.body.phone,hash];

  performQuery(req,createOrg,params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      req.session.username = req.body.username;
      req.session.type = "Org";
      res.json({success:true,message:rows,url:'http://localhost/org/'+req.body.username});
    }
  });
});

router.patch('/org/:username', function(req,res){
  //TODO: INPUT SANITATION

  var updates = {};
  if(req.body.name)
    updates.nameOrg = req.body.name;
  if(req.body.missionStatement)
    updates.missionStatementOrg = req.body.missionStatement;
  if(req.body.email)
    updates.emailOrg = req.body.email;
  if(req.body.password)
    updates.hashOrg = bcrypt.hashSync(req.body.password, saltRounds);
  if(req.body.otherInfo)
    updates.otherInfo = req.body.otherInfo;
  if(req.body.phone)
    updates.phone = req.body.phone;

  if(Object.keys(updates).length!==0){
    var patchOrg = 'UPDATE Org SET ? WHERE usernameOrg=?';
    var params = [updates,req.params.username];
    console.log(mysql.format(patchOrg,params));
    performQuery(req,patchOrg,params, function(err, rows,fields) {
      if (err) {
        res.json({success:false,message:err});
      } else {
        res.json({success:true,message:rows,url:'http://localhost/user/'+req.params.username});
      }
    });
  }

  if(req.body.member){
    //TODO: if it contains a username, we will need to add to the "membership"
    var insert = 'INSERT INTO Membership(idUser,idOrg,dateJoinedMembership) VALUES ((SELECT idUser FROM User WHERE usernameUser=?),(SELECT idOrg FROM Org WHERE usernameOrg=?),?)';
    var date = new Date();
    var qparams = [req.body.member,req.params.username,date.toISOString()];
    console.log(mysql.format(insert,qparams));
    performQuery(req,insert,qparams, function(err, rows,fields) {
      if (err) {
        res.json({success:false,message:err});
      } else {
        res.json({success:true,message:rows,url:'http://localhost/user/'+req.params.username});
      }
    });
  }

});

router.get('/org/:username', function(req,res){
  //TODO: INPUT SANITATION
  var sql = 'SELECT * FROM Org WHERE usernameOrg=?';
  var params = [req.params.username];

  performQuery(req,sql, params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      var responseObj = responses.getOrg;
      var toAdd = {
        success:true,
        url:'http://localhost/org/'+rows[0].usernameOrg,
        username:rows[0].usernameOrg,
        name:rows[0].nameOrg,
        phone:rows[0].phoneOrg,
        email:rows[0].emailOrg,
        missionStatement:rows[0].missionStatementOrg,
        otherInfo:rows[0].otherInfo,
        condensedEvents:null,
        condensedVolunteers:null,
        splashImageURL:'http://colorfully.eu/wp-content/uploads/2012/06/empty-road-facebook-cover.jpg',
        imageURL:'http://store.mdcgate.com/market/assets/image/icon_user_default.png'

      };
      responseObj = Object.assign(responseObj,toAdd);
      res.json(responseObj);
    }
  });
});

router.post('/org/login', function(req,res){
  //destroy current session, if one exists
  req.session.destroy(function(err){
  var selectUser = 'SELECT hashOrg FROM Org WHERE usernameOrg=?';
  var params = [req.body.username];

  performQuery(req,selectUser,params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      var result;
      if(bcrypt.compareSync(req.body.password,rows[0].hashOrg)){
        req.session.regenerate(function(err) {
	  req.session.username = req.body.username;
          req.session.type = "Org";
	})
        res.json({success:true,url:'http://localhost/orgs/'+req.body.username});
      } else {
        res.json({success:false,message:err});
      }

    }
  });
})
});



module.exports = router;
