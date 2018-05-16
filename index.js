var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Logs in the console whenever a user logs on
io.on('connection',function(socket){
	console.log('a user connected');
	socket.on('disconnect',function(){
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