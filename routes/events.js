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
			res.json({success:true,message:rows,url:'http://localhost/org/'+req.body.username + '/events/' + rows.insertId});
		}
	});

});


//Copy and paste code from orgs.js for reference
router.get('/org/:username/events/:idEvent', function(req,res){

	var sql = 'SELECT * FROM Event WHERE idEvent=?';
	var params = [req.params.idEvent];

	performQuery(req,sql, params, function(err, rows, fields) {
		if (err) {
			res.json({success:false,message:err});
		} else {
			var toAdd = {
				success:true,
				title:rows[0].titleEvent,
				address:rows[0].addressEvent,
				city:rows[0].cityEvent,
				state:rows[0].stateCodeEvent,
				zip:rows[0].postCodeEvent,
				dateStart:rows[0].dateStartEvent,
				dateEnd:rows[0].dateEndEvent,
				description:rows[0].descriptionEvent,
				maxAttendees:rows[0].maxAttendeesEvent,
				condensedVolunteers:null
			};
			res.json(toAdd);
		}
	});

});
//Modify live event
router.patch('/org/:username/events/:idEvent', function(req,res){

  if(req.body.attendee){
    //TODO: if it contains a username, we will need to add to the "membership"
    var insert = 'INSERT INTO Attendance(idUser,idEvent,dateJoinedAttendance) VALUES ((SELECT idUser FROM User WHERE usernameUser=?),?,?)';
    var date = new Date();
    var qparams = [req.body.attendee,req.params.idEvent,date.toISOString()];
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

module.exports = router;
