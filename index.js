var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// ---Author's Notes---
// Javascript features similar to what Jquery offered which allowed for 
// listener events for functions or methods to be executed if a certain 
// crteria was met

io.on('connection',function(socket){

	// What we are doing here is setting a listener event for when the 
	// application is running, it would access the socket library and log 
	// on the console side of the application. The same event is repeated 
	// below for when the user disconnects their client from the server

	console.log('a user connected');
	socket.on('disconnect',function(){
	// Listener event ^^
		console.log('a user disconnected');
	});
	socket.on('chat message', function(msg){
		console.log('message: '+msg)
	});
});


//Signals that the program is running on localhost:3000
http.listen(3000, function(){
  console.log('listening on *:3000');
  console.log('Application now running');
});