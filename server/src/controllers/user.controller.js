const { User, user_contacts } = require('../db')

const getUser = async (req, res) => {
    try {
        let {id} = req.params
        const user = await User.findOne({
            where: {tel:id}
        })
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}

const getFriends = async (req, res) => {
    // const user =  req.session.user
    let user = 3
    const friendsId = await user_contacts.findAll({
        raw: true,
        attributes: ['id'],
        where: {
            UserId:user
        }     
    })
    const friends = await User.findAll({
        raw: true,
        where: {
            id: ['2', '4']
        }
    })
    console.log(friendsId[1]);
    res.send(friends)
}

module.exports  = {
    getUser,
    getFriends
}

