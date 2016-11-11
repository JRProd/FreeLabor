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
	//YO AJ THIS AINT FINISHED
}

//Copy and paste code from orgs.js for reference
router.post('/event', function(req,res){
	var createEvent = 'INSERT INTO Event (title,address,city,state,zip,dateStart,dateEnd,description,maxAttendees) VALUES(?,?,?,?,?,?,?,?,?)';
	
	//Get paramaterized query ready
	var params = [req.body.title,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.dateStart,req.body.dateEnd,req.body.description,req.body.maxAttendees];

});

//Copy and paste code from orgs.js for reference
router.get('/event/:usernameOrg/:idEvent', function(req,res){


});
//Modify live event
router.put('/event/:usernameOrg/:idEvent', function(req,res){


});

module.exports = router;
