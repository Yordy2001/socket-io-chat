const { json } = require('body-parser');
const { User, user_contacts, chats } = require('../db')

const getFriends = async(req, res) => {
    const { tel } = req.params
    
    try {
        
        const friends = await user_contacts.findAll({
            attributes: ['id']
        })
        const user = await User.findAll({
            where: {id: friends}
        })
        res.status(200).send(user)

    } catch (error) {
        console.log(error)
    }
}


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


module.exports = { getFriends, message }