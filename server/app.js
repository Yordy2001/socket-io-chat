const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')

const router = require('./routers/user.routes')
//Server config 
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000'
    }
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(router)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('client:logged', (num)=>{
        console.log(num)
        io.emit('server:')
    })
});

server.listen(4000, () => {
    console.log('listening on *:4000');
})
