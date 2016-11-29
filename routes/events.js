var express = require('express');
var router = express.Router();
var responses = require('./responses.js');
var bcrypt = require('bcrypt');
var saltRounds = 10;
function checkInput(title,addr,city,state,zip,dateStart,dateEnd,desc,maxAtten){
	var errorBuffer = "";
	var errorThrown = false;
	//Make sure each parameter is not undefined and not null, while being the correct data type
	if((typeof(title) === 'string') && (title !== null)){
	}else{
		errorBuffer += "Invalid title object, ";
		errorThrown = true;
	}
	if((typeof(addr) === 'string') && (addr !== null)){

	}else{
		errorBuffer += "Invalid address object, ";
		errorThrown = true;
	}
	if((typeof(city) === 'string') && (city !== null)){

	}else{
		errorBuffer += "Invalid city object, ";
		errorThrown = true;
	}
	if((typeof(state) === 'string') && (state !== null)){

	}else{
		errorBuffer += "Invalid state object, ";
		errorThrown = true;
	}
	if((typeof(zip) === 'number') && (zip !== null)){

	}else{
		errorBuffer  += "Invalid zip object, ";
		errorThrown = true;
	}
	if((typeof(dateStart) === 'string') && (dateStart !== null)){
		//Check if it is ISO standard
	}else{
		errorBuffer += "Invalid dateStart object, ";
		errorThrown = true;
	}
	if((typeof(dateEnd) === 'string') && (dateEnd !== null)){
		//Check if it is ISO standard
	}else{
		errorBuffer += "Invalid dateEnd object, ";
		errorThrown = true;
	}
	if((typeof(desc) === 'string') && (desc !== null)){

	}else{
		errorBuffer +="Invalid dateStart object, ";
		errorThrown = true;
	}
	if((typeof(maxAtten) === 'number') && (maxAtten !== null)){

	}else{
		errorBuffer += "Invalid dateStart object";
		errorThrown = true;
	}
	if(errorThrown){
		return errorBuffer;
	}else{
		return "T";
	}
}

//Copy and paste code from orgs.js for reference
router.post('/event', function(req,res){
	//Get paramaterized query ready
	var createEvent = 'INSERT INTO Event (title,address,city,state,zip,dateStart,dateEnd,description,maxAttendees) VALUES(?,?,?,?,?,?,?,?,?)';
	//If the type is User they can not create an event
	var param = req.session.username;
	if(req.session.type == 'User'){
		res.json({success:false,message:'Volunteers cannot create Events, please log into an Org Account to create one.'});
	}else{
		//check inputs
		var errorMsg = checkInput(req.body.title,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.dateStart,req.body.dateEnd,req.body.description,req.body.maxAttendees);
		if(errorMsg != "T"){
			res.json({success:false,message:errorMsg});
		}else{
			var params = [req.body.title,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.dateStart,req.body.dateEnd,req.body.description,req.body.maxAttendees];
			//Preform query
			function performQuery(query,data,callback) {
				req.db.query(query, data, function(err, rows, fields) {
					if (err) {
						callback(err, null);
					} else {
						callback(null, rows);
	  				}
				});
			performQuery(createEvent,params, function(err, rows, fields) {
				if (err) {
					res.json({success:false,message:err});
				} else {
					//this is a nasty hack, should be paramaterized
					var eventID = req.db.query('SELECT eventID FROM Event WHERE title = ' . req.body.title . 'AND description = ' . req.body.description);
					res.json({success:true,message:rows,url:'http://localhost/org/'+ req.session.username + '/events/' + eventID});
				}
			});
			}
		}
	}
});

//Copy and paste code from orgs.js for reference
//if not logged in, redirect to login page
router.get('/event/:usernameOrg/events/:idEvent', function(req,res){
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
