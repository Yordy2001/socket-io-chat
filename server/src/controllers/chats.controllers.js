const { User, Message } = require('../db')


module.exports = (io, socket) => {

    const handleMessage = async (msg) => {

        const { tel, message } = msg

        const user = await User.findOne({
            where: { tel: tel }
        })

        io.to(tel).to(numero).emit("server:messages", { data: msg, user: user })
        console.log();
    }

    const chats = async (payload) => {
        try {
            const user = await User.findAll()
            io.emit("server:chats", user)
        } catch (error) {
            console.log(error)
        }
    }
    socket.on("client:chats", chats)
    socket.on( "client:messages", handleMessage)

}

