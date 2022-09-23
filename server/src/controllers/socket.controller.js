const UserModel = require('../db/models/user.model')


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
        const { tel, message } = msg
        try {
            const user = await UserModel.findOne({tel})
            // io.emit("server:messages", { data: message, user: user })
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
