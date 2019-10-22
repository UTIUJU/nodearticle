var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  // socket.on('chat message: ' + function(msg) {
  //   console.log('message: ' +msg);
   // });
  });
 
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



server.listen(4000, function() {
  console.log('listening on port 4000');
});