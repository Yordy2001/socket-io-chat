const { chats } = require('../db/index')


const message = async (req, res) => {
    try {
        const messages = await chats.findAll(
            {where:req.id}
        )
        return res.status(200).json(messages)
    } catch (error) {
        console.log(error)
    }
}

const chats = async (msg) => {
    // await chats.findAll()
}
// const chats = async(msg)=>{
//     await chats.findAll()
// }
