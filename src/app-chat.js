let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let path = require('path');

// Khởi tạo server
app.get('/', function (req, res) {
  let express = require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname, '', 'mess.json'));
});

// Đăng ký các sự kiện của socket
io.on('connection', function (socket) {
  socket.on('client-send-data', function (data) {
    io.emit('client-send-data', data);
  });
  socket.on('consultant-send-data', function (data) {
    io.emit('consultant-send-data', data);
  });
});

// Mở cổng lắng nghe của socket là 3000
http.listen(3000, function () {
  console.log('listening on *:3000');
});


