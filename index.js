const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Emitter } = require("@socket.io/postgres-emitter");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const {db} = require ("./db/models/")


app.use(express.static('public'))
app.use('/static',express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
// });


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
})
