var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// Khởi tạo server
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Đăng ký các sự kiện của socket
io.sockets.on('connection', function (socket) {
  socket.emit('news', data);
  socket.on('my other event', function (data) {
    console.log(data);
  });

});

// Mở cổng lắng nghe của socket là 3000
server.listen(3000, function () {
  console.log('listening on *:3000');
});


