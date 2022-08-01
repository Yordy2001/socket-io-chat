// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const cookieParse = require('cookie-parser')
// const cookieSession = require('././cookie')

// class serverConfig {
//     app
//     io
//     server
//     constructor(){
//         this.app = express();
//         this.server = http.createServer(this.app);
//         this.io = new Server(this.server, {
//             cors:{
//                 origin: '*'
//             }
//         });
//     }

//     // set app middlewares
//     appMiddleares = () => {
//         this.app.use(bodyParser.urlencoded({ extended: false }))
//         this.app.use(bodyParser.json())
//         this.app.use(express.static('public'))
//         this.app.use('/static', express.static('public'))
//         this.app.use(cors({ origin: '*' }))
//         this.app.use(cookieParse)  
//         this.app.use(cookieSession)
//     }
// }

module.exports = serverConfig
