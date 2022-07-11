const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./routers/user.routes');
// const chats = require('./controllers/chats.controllers')
const { randomInt } = require('crypto');

//Server config 
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: '*'
    }
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(cors(
    {origin: '*'}
    ))
    
app.use(router)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const chats = [
    // {
    //     "userId": 1,
    //     "messageId": "1515",
    //     "message": "hey",
    //     "time": "9:25pm" 
    // },
    // {
    //     "userId": 2,
    //     "messageId": "1517",
    //     "message": "hola",
    //     "time": "9:50pm" 
    // },
    // {
    //     "userId": 1,
    //     "messageId": "1574112",
    //     "message": "que tal ?",
    //     "time": "9:45pm" 
    // }
]

const date = new Date()

io.on('connection', (socket) => {
    
    socket.on('client:logged', (num)=>{
        socket.join(num)
        io.emit('server:logged', num)
    })
    
    // socket.on("client:chats", chats)

    socket.on("client:messages", (msg)=>{
        chats.push(
            {
                "userId": randomInt(7),
                "messageId":randomInt(12),
                "message": msg,
                "time": date.getHours() 
            }
        )
        io.emit("server:messages", chats)
    })
});

server.listen(4000, () => {
    console.log('listening on *:4000');
})
