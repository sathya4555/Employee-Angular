
const express = require('express')
const app = express()
var server =  require('http').Server(app)
var io= require('socket.io')(server)


io.on('connection',function(socket){
    console.log("A uver connected");
    socket.emit('socketId','here is some data')
})


server.listen(3000,() =>{
    console.log("Socket io server is listening on port 3000");
})