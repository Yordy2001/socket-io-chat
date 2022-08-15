const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParse = require('cookie-parser')
const cookieSession = require('./utils/cookie')

const authMiddleware = require('./middleware/authenticate')
const router = require('./routers/user.routes');
const { User, Sala } = require('./db')

//Server config 
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: '*'
    }
});

app.set('trust proxy', 1) //cookie config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(cors({ origin: '*' }))
app.use(cookieParse())
app.use(cookieSession)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.use(router)


io.on('connection', (socket) => {
    
    socket.on('client:logged', (num)=>{
        socket.join(num)
        io.emit('server:logged', num)
    })
    
    socket.on("client:chats",  async (tel)=>{
        try {
            const user =  await User.findAll()
            io.emit("server:chats", user)
        } catch (error) {
            console.log(error)
        }
        
    })

    socket.on("client:messages", (msg)=>{
        const {tel, message} = msg
        io.to(tel).emit("server:messages", message)
    })
});

server.listen(4000, () => {
    console.log('listening on *:4000');
})
