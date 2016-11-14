var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var saltRounds = 10;
function checkInput(title,addr,city,state,zip,dateStart,dateEnd,desc,maxAtten){
	var errorBuffer;
	//Make sure each parameter is not undefined and not null, while being the correct data type
	if((typeof(title) === 'string') && (title !== null)){
		
	}else{
		//concat errorBuffer, invalid title object
	}
	if((typeof(addr) === 'string') && (addr != null)){
		
	}else{
		//concat errorBuffer, invalid address object
	}
	if((typeof(city) === 'string') && (city != null)){
	
	}else{
		//concat errorBuffer, invalid city object
	}
	if((typeof(state) === 'string') && (state != null)){
	
	}else{
		//concat errorBuffer, invalid state object
	}
	if((typeof(zip) === 'number') && (zip != null)){

	}else{
		//concat errorBuffer, invalid zip object
	}
	if((typeof(dateStart) === 'string') && (dateStart != null)){
		//Check if it is ISO standard
	}else{
		//concat errorBuffer, invalid dateStart object
	}
	if((typeof(dateEnd) === 'string') && (dateEnd != null)){
		//Check if it is ISO standard
	}else{
		//concat errorBuffer, invalid dateEnd object
	}
	if((typeof(desc) === 'string') && (desc != null)){
	}else{
		//concat errorBuffer, invalid dateStart object
	}
	if((typeof(maxAtten) === 'number') && (maxAtten != null)){
	}else{
		//concat errorBuffer, invalid dateStart object
	}
}

//Copy and paste code from orgs.js for reference
router.post('/event', function(req,res){
	var createEvent = 'INSERT INTO Event (title,address,city,state,zip,dateStart,dateEnd,description,maxAttendees) VALUES(?,?,?,?,?,?,?,?,?)';
	//Get paramaterized query ready
	var params = [req.body.title,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.dateStart,req.body.dateEnd,req.body.description,req.body.maxAttendees];
	function performQuery(query,data,callback) {
		req.db.query(query, data, function(err, rows, fields) {
			if (err) {
				callback(err, null);
			} else
				callback(null, rows);
	  });
	}
	performQuery(createEvent,params, function(err, rows, fields) {
		if (err) {
			res.json({success:false,message:err});
		} else {
			//Right now I have no way to get the org's name
			res.json({success:true,message:rows,url:'http://localhost/org/'+req.body.orgName + '/events/' + req.body.title});
		}
	});
});

//Copy and paste code from orgs.js for reference
router.get('/event/:usernameOrg/:idEvent', function(req,res){
	var sql = 'SELECT title,address,city,state,zip,dateStart,dateEnd,description,maxAttendees FROM Event WHERE eventID=?';
	var params = [req.params.eventID];	
	function performQuery(query,data,callback) {
		req.db.query(query, data, function(err, rows, fields) {
			if (err) {
				callback(err, null);
			} else
				callback(null, rows, fields);
	  });
	}
	performQuery(sql, params, function(err, rows, fields) {
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
