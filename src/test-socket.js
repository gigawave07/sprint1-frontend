var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', (socket) => {
  console.log('a user connected');
})

server.listen(3000, () => {
  console.log('listening on *:3000');
})
