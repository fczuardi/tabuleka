//Here is where we create the global parameters
//and start listening to 'port', we are creating an express
//server and then binding it to socket.io
var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io')(server);
        //we're also going to create another variable to keep track of the clients
        serverClients = {};
//have to server listen to port 1337
server.listen(1337);

var rooms = [];

//configure express paths to load resources when making a GET request
app.use("/css", express.static(__dirname + '/public/styles'));
app.use("/js", express.static(__dirname + '/public/js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/game/:room', function (req, res) {
    var roomName = req.params.room;

    console.log('GET', roomName);

    if (rooms[roomName] === undefined){
        //create room
        rooms[roomName] = io.of(roomName)
            .on('connection', function(socket){
                console.log('new player connected');
                socket.on('disconnect', function () {
                    console.log('user disconnected');
                });
            });
    }
    res.sendFile(__dirname + '/public/game.html');
});
