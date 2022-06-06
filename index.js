const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

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
