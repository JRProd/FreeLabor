var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var multer  = require('multer');
var cloudinary = require('cloudinary');
var mysql = require('mysql');
var saltRounds = 10;

function performQuery(req,query,data,callback) {
  req.db.query(query, data, function(err, rows, fields) {
    if (err) {
      callback(err, null);
    } else{
      callback(null, rows);
    }
  });
}

router.post('/user', function(req,res){
  //TODO: INPUT SANITATION
  var createUser = 'INSERT INTO User(firstNameUser,lastNameUser,emailUser,usernameUser,hashUser) VALUES(?,?,?,?,?)';
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var params = [req.body.firstName,req.body.lastName,req.body.email,req.body.username,hash];


  var queryResult;
  performQuery(req,createUser,params, function(err, content) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      req.session.username = req.body.username;
      req.session.type = "User";
      res.json({success:true,message:content,url:'http://localhost/user/'+req.body.username});
    }
  });
});

router.patch('/user/:username', function(req,res){
  //TODO: INPUT SANITATION
  var patchUser = 'UPDATE User SET ? WHERE usernameUser=?';
  //{firstNameUser:req.body.firstName,lastNameUser:req.body.lastName,emailUser:req.body.email}
  var updates = {};
  if(req.body.firstName)
    updates.firstNameUser = req.body.firstName;
  if(req.body.lastName)
    updates.lastNameUser = req.body.lastName;
  if(req.body.email)
    updates.emailUser = req.body.email;
  if(req.body.password)
    updates.hashUser = bcrypt.hashSync(req.body.password, saltRounds);
  if(req.body.bio)
    updates.bioUser = req.body.bio;
  var params = [updates,req.params.username];
  console.log(mysql.format(patchUser,params));
console.log(req.session);
if(req.session.username == req.params.username){
  performQuery(req,patchUser,params, function(err, content) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      res.json({success:true,message:content,url:'http://localhost/user/'+req.params.username});
    }
  });
}else{

  console.log("User tried to modify someone not logged in.");
  res.json({success:false,err:"You tried to modify someone other than yourself"});
}
});

router.get('/user/:username', function(req,res){
  //TODO: INPUT SANITATION
  var sql = 'SELECT * FROM User WHERE usernameUser=?';
  var params = [req.params.username];

  var queryResult;
  performQuery(req,sql, params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      var json = {
        success:true,
        url:'http://localhost/user/'+req.params.username,
        username:rows[0].usernameUser,
        firstName:rows[0].firstNameUser,
        lastName:rows[0].lastNameUser,
      };
      if(rows[0].imageURLUser===null){
        json.imageURLUser='http://store.mdcgate.com/market/assets/image/icon_user_default.png';
      } else {
        json.imageURL=rows[0].imageURLUser;
      }

      if(rows[0].bioUser===null){
        json.bioUser='My Bio would appear here. IF I HAD ONE.';
      } else {
        json.bioUser=rows[0].bioUser;
      }

      res.json(json);
    }
  });
});

function storeCloudinary(result,req,res){
  //TODO: INPUT SANITATION
  var sql = 'UPDATE User SET imageURLUser=? WHERE usernameUser=?';
  var params = [result.url,req.params.username];

  performQuery(req,sql, params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      res.json({
        success:true,
        url:'http://localhost/user/'+req.params.username,
        imageURL:result.url
      });
    }
  });
}
router.post('/user/:username/picture', function (req, res, next) {
  var ccon = {
    public_id: 'put user id or username here',
    crop: 'limit',
    width: 2000,
    height: 2000,
    eager: [
      { width: 200, height: 200, crop: 'thumb', gravity: 'face',
        radius: 20, effect: 'sepia' },
      { width: 100, height: 150, crop: 'fit', format: 'png' }
    ],
    tags: ['special', 'for_homepage']
  };

  console.log(req.files);

  cloudinary.uploader.upload(req.files[0].path,function(result){ storeCloudinary(result,req,res);}, ccon);
});


router.post('/user/login', function(req,res){
  req.session.regenerate(function(err){
    var selectUser = 'SELECT hashUser FROM User WHERE usernameUser=?';
    var params = [req.body.username];
    function performQuery(req,query,data,callback) {
      req.db.query(query, data, function(err, rows, fields) {
        if (err) {
          callback(err, null);
        } else{
          callback(null, rows);
        }
      });
    }

    performQuery(req,selectUser,params, function(err, rows, fields) {
      if (err) {
        res.json({success:false,message:err});
      } else {
        if(bcrypt.compareSync(req.body.password,rows[0].hashUser)){
  	      req.session.username = req.body.username;
          req.session.type = "User";

          console.log(req.session);
          res.json({success:true,url:'http://localhost/user/'+req.body.username});
        } else {
          res.json({success:false,message:err});
        }

      }
    });
  });
});


module.exports = router;
