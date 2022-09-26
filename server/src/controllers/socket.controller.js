const UserModel = require('../db/models/user.model')
const MessageModel = require('../db/models/message.models')
const middleware = require('../middleware/authenticate')


module.exports = (io, socket) => {
    let numero

    // Create User Room 
    const loger = (num) => {
        socket.join(num)
        numero = num

        io.emit('server:logged', num)
    }

    // Get and post message
    const handleMessage = async (msg) => {
        const { tel, message, userTel } = msg
        try {
            const user = await UserModel.findOne({tel})
            await MessageModel.create({
                message,
                to: tel,
                from:userTel
            })
            const msg = await MessageModel.find()
            console.log(msg);
            io.to(tel).to(numero).emit("server:messages", { data: message, user: user })

        } catch (error) {
            console.log(error);
        }
    }

    const chats = async (payload) => {
        // try {
        //     const user = await User.findAll()
        //     io.emit("server:chats", user)
        // } catch (error) {
        //     console.log(error)
        // }
    }
    socket.on('client:logged', loger)
    // socket.on("client:chats", chats)
    socket.on("client:messages", handleMessage)
}
