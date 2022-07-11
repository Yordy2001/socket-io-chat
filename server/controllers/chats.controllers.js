const { Chats } = require('../db')

const chats = async(tel)=>{
    try {
        const chats =  await Chats.getAll({
            where:tel
        })
        io.emit("server:messages", chats)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = chats