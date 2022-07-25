const { User } = require('../db')

const chats = async (tel)=>{
    console.log("entro a los chats")
    try {
        const user =  await User.findAll()
        io.emit("server:chats", user)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = chats