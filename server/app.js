const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParse = require('cookie-parser')
const cookieSession = require('./utils/cookie')

const router = require('./routers/user.routes');
const { User, Message } = require('./db')

//Server config 
const app = express();
app.set('trust proxy', 1) //cookie config


const server = http.createServer(app);
const io = new Server(server, {
   cors:{
        credentials: true,
        origin: 'http://localhost:3000'
    }
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(cookieParse())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(cookieSession)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Set routes
app.use(router)


io.on('connection', (socket) => {
    let numero
    socket.on('client:logged', (num)=>{
        socket.join(num)
        numero = num
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

    socket.on("client:messages", async(msg)=>{
        const {tel, message} = msg

        const user = await User.findOne({
            where:{tel:tel}
        })
        
        let messages = await Message.findAll({
            // include: [{
            //     model: User,
            //     where: { UserId : user.id }
            // }],
            where:{SalaId:3}
        })

        io.to(tel).to(numero).emit("server:messages", message)
    })
});

server.listen(4000, () => {
    console.log('listening on *:4000');
})
