const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

//Server config 
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const { User } = require('./db/index')

app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


io.on('connection', (socket) => {
    // socket.on('chat-message', (msg) => {
    //     io.emit('chat-message', msg);
    // });

    socket.on('client:register', async (register) => {
        const {name, tel, portada, info} = register
    
        try {
            await User.create({
                full_name: name,
                tel,
                portada,
                info
            })

        } catch (error) {
            console.log(error)
        }
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
})
