var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var saltRounds = 10;

//Volunteer Join Event
router.put('/event/:eventID', function(req,res){
	//Start prepared statement
	var joinEvent = "INSERT INTO Attendance (idUser,idEvent, dateJoinedAttendance) VALUES (?,?,?);";
	var params = [req.body.userid, req.params.eventID];
	function performQuery(query,data,callback) {
		req.db.query(query, data, function(err, rows, fields) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, rows);
	  		}
		});
		performQuery(joinEvent,params, function(err, rows, fields) {
			if (err) {
				res.json({success:false,message:err});
			} else {
				res.json({success:true});
			}
		});
});
