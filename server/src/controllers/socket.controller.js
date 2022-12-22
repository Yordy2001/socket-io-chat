const UserModel = require('../db/models/user.model')
const MessageModel = require('../db/models/message.models')


module.exports = (io, socket) => {
    let numero

    // Create User Room 
    const handleConnect = async (num) => {
        socket.join(num)
        numero = num

        let user = await UserModel.findOne({ tel: num })
        user.isActive = true
        await user.save()
        return
    }

    const handleDiconnect = async (num) => {
        let user = await UserModel.findOne({ tel: num })
        console.log(user);
        user.isActive = false
        await user.save()
        // socket.disconnect()
        return
    }

    // Get and post message
    const handleMessage = async (msg) => {
        const { tel, message, userTel } = msg
        try {
            const user = await UserModel.findOne({ tel })
            const mesagess = await MessageModel.find()
            io.to(tel).to(numero).emit("server:messages", { data: message, user: user })

        } catch (error) {
            console.log(error);

        }
    }

    const setMessage = async (payload) => {
        const { userTel, message, tel } = payload
        try {
            await MessageModel.create({
                message,
                to: tel,
                from: userTel
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getMessage = async (payload) => {
        const { userTel, message, tel } = payload
        const messages = await MessageModel.find({ $or: [{ to: userTel, from: tel }] })
    }

    socket.on('client:connect', handleConnect)

    socket.on('disconnect', handleDiconnect)
    // socket.on("client:chats", chats)
    socket.on("client:messages", setMessage, handleMessage)
}
