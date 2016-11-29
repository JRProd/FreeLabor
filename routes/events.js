var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var mysql = require('mysql');
var saltRounds = 10;

function performQuery(req,query,data,callback) {
	req.db.query(query, data, function(err, rows, fields) {
		if (err) {
			callback(err, null,null);
		} else {
			callback(null, rows,fields);
		}

	});
}

//Copy and paste code from orgs.js for reference
router.post('/event', function(req,res){
	//Get paramaterized query ready
	var createEvent = 'INSERT INTO Event (idOrg,titleEvent,locationEvent,addressEvent,cityEvent,stateCodeEvent,postCodeEvent,dateStartEvent,dateEndEvent,descriptionEvent,maxAttendeesEvent) VALUES ((SELECT idOrg FROM Org WHERE usernameOrg=?),?,?,?,?,?,?,?,?,?,?)';
	//check inputs

	var params = [req.body.username,req.body.title,req.body.location,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.dateStart,req.body.dateEnd,req.body.description,req.body.maxAttendees];
	//Preform query
	console.log(mysql.format(createEvent,params));
	performQuery(req,createEvent,params, function(err, rows, fields) {
		if (err) {
			res.json({success:false,message:err});
		} else {
			//Right now I have no way to get the org's name
			res.json({success:true,message:rows,url:'http://localhost/org/'+req.body.username + '/events/' + req.body.title});
		}
	});

});


//Copy and paste code from orgs.js for reference
router.get('/event/:usernameOrg/:idEvent', function(req,res){
	var sql = 'SELECT title,address,city,state,zip,dateStart,dateEnd,description,maxAttendees FROM Event WHERE eventID=?';
	var params = [req.params.eventID];
	function performQuery(req,query,data,callback) {
		req.db.query(query, data, function(err, rows, fields) {
			if (err) {
				callback(err, null);
			} else
				callback(null, rows, fields);
	  });
	}
	performQuery(req,sql, params, function(err, rows, fields) {
		if (err) {
			res.json({success:false,message:err});
		} else {
			var responseObj = responses.getOrg;
			var toAdd = {
				success:true,
				title:rows[0].title,
				address:rows[0].address,
				city:rows[0].city,
				state:rows[0].state,
				zip:rows[0].zip,
				dateStart:rows[0].dateStart,
				dateEnd:rows[0].dateEnd,
				description:rows[0].description,
				maxAttendees:rows[0].maxAttendees
			};
			responseObj = Object.assign(responseObj,toAdd);
			res.json(responseObj);
		}
	});

});
//Modify live event
router.put('/event/:usernameOrg/:idEvent', function(req,res){


});

module.exports = router;
