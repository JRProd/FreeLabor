var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var multer  = require('multer');
var cloudinary = require('cloudinary');


var saltRounds = 10;

router.post('/user', function(req,res){
  //TODO: INPUT SANITATION
  var createUser = 'INSERT INTO User(firstNameUser,lastNameUser,emailUser,usernameUser,hashUser) VALUES(?,?,?,?,?)';
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var params = [req.body.firstName,req.body.lastName,req.body.email,req.body.username,hash];

  function performQuery(query,data,callback) {
    req.db.query(query, data, function(err, rows, fields) {
      if (err) {
        callback(err, null);
      } else{
        callback(null, rows);
      }
    });
  }
  var queryResult;
  performQuery(createUser,params, function(err, content) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      res.json({success:true,message:content,url:'http://localhost/user/'+req.body.username});
    }
  });
});

router.get('/user/:username', function(req,res){
  //TODO: INPUT SANITATION
  var sql = 'SELECT usernameUser,firstNameUser,lastNameUser FROM User WHERE usernameUser=?';
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
  var queryResult;
  performQuery(sql, params, function(err, rows, fields) {
    if (err) {
      res.json({success:false,message:err});
    } else {
      res.json({
        success:true,
        url:'http://localhost/user/'+req.params.username,
        username:rows[0].usernameUser,
        firstName:rows[0].firstNameUser,
        lastName:rows[0].lastNameUser,
        bio:'This feature has yet to be implemented on the backend. Please injoy this message as sample data, let me know if you want me to create a longer bio.',
        imageURL: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg'
      });
    }
  });
});

router.post('/pic', function (req, res, next) {
  console.log("enterredxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // req.body will hold the text fields, if there were any
  console.log(req.files);

//   cloudinary.uploader.upload(req.file.path,
//   function(result) { console.log(result); },
//   {
//     public_id: 'user_ID',
//     crop: 'limit',
//     width: 2000,
//     height: 2000,
//     eager: [
//       { width: 200, height: 200, crop: 'thumb', gravity: 'face',
//         radius: 20, effect: 'sepia' },
//       { width: 100, height: 150, crop: 'fit', format: 'png' }
//     ],
//     tags: ['special', 'for_homepage']
//   }
// );


});




module.exports = router;
