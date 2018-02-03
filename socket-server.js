var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
});

app.use("/", express.static('build'));

http.listen(3001, function(){
    console.log('listening on *:3000');
});