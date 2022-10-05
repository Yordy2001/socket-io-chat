const UserModel = require('../db/models/user.model')
const MessageModel = require('../db/models/message.models')


module.exports = (io, socket) => {
    let numero

    // Create User Room 
    const loger =  async(num) => {
        socket.join(num)
        numero = num

        let user = await UserModel.findOne({tel:num})
        user.online = true
        await user.save()
        return
    }

    // Get and post message
    const handleMessage = async (msg) => {
        const { tel, message, userTel} = msg
        try {
            const user = await UserModel.findOne({tel})
            const mesagess = await MessageModel.find()
            io.to(tel).to(numero).emit("server:messages", { data: message, user: user })

        } catch (error) {
            console.log(error);
        }
    }

    const setMessage = async (msg) => {
        const { userTel, message, tel } = msg
        try {
            await MessageModel.create({
                message,
                to: tel,
                from:userTel
            })
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
    socket.on("client:messages", handleMessage, setMessage)
}
