const { User, Message } = require('../db/models/message.models')


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

        // const { tel, message } = msg
        // try {
        //     const user = await User.findOne({
        //         where: { tel: tel }
        //     })

        //     io.to(tel).to(numero).emit("server:messages", { data: msg, user: user })

        // } catch (error) {
        //     console.log(error);
        // }
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
    socket.on("client:chats", chats)
    socket.on("client:messages", handleMessage)
}
