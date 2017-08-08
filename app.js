//require the http module!
var http = require('http');

var PORT1 = 7000;

var PORT2 = 7500;

//set up the info for the user's request for the first port
	//set up servers
	//var server1 =  http.createServer(handlerequestgood);
//model from the previous activity 
	// var server = http.createServer(function(request, response){
	
	// response.end("it works! + Path hit: " + request.url);

	// });


//can set this up as functions instead so it is visible for the user! 
	// function handlerequestgood(request, response){

	// 	response.end("good job you!");

	// }

	// function handlrerequestbad(){
	// 	response.end()

	// }

	server.listen(PORT1, function(){

		console.log("server listening on: http://localhost" + PORT1 + " and good for you! (^-^)/  ");
	});


	server.listen(PORT2, function(){
		console.log("server listening on: http://localhost" + PORT2 + " and you should be ashamed of yourself for it!");

	});


