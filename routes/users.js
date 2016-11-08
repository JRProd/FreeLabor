var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/users/create', function(req,res){
	//query to create user
	var speaker = req.params.usernameOrg;
	res.setHeader('Content-Type', 'application/json');

	res.send(JSON.stringify({'param':speaker,'response':responses.getOrg}));

});

router.post('/user', function(req,res){
	//INPUT SANITATION
	var createUser = 'INSERT INTO User(firstNameUser,lastNameUser,emailUser,usernameUser,hashUser) VALUES(?,?,?,?,?)';
	var hash = bcrypt.hashSync(req.body.password, saltRounds);
	var params = [req.body.firstName,req.body.lastName,req.body.email,req.body.username,hash];

	function performQuery(query,data,callback) {
		req.db.query(query, data, function(err, rows, fields) {
			if (err) {
				callback(err, null);
			} else
				callback(null, rows);
	  });
	}
	var queryResult;
	performQuery(createUser,params, function(err, content) {
		if (err) {
			res.json({success:false,message:err})
		} else {
			res.json({success:true,message:content,url:'http://localhost/user/'+req.body.username})
		}
	});
});

router.get('/user/:username', function(req,res){
	//INPUT SANITATION
	var sql = 'SELECT usernameUser,firstNameUser,lastNameUser FROM User WHERE usernameUser=?';
	var params = [req.params.username];

	function performQuery(query,data,callback) {
		req.db.query(query, data, function(err, rows, fields) {
			if (err) {
				callback(err, null);
			} else
				callback(null, rows, fields);
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




module.exports = router;
