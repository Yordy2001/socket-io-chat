const  UserModel  = require('../db/models/user.model')


const getUser = async (req, res) => {
    // try {
    //     let {id} = req.params
    //     const user = await User.findOne({
    //         where: {tel:id}
    //     })
    //     res.status(200).json(user)
    // } catch (error) {
    //     console.log(error);
        
    // }
}

// Returun list of user's friends
const getFriends = async (req, res) => {
    const {id} =  req.session.user
    const {friends} = await UserModel.findOne({id});
    let LFriends = [];

    for(i = 0; i <= friends.length; i++){
        user = await UserModel.findOne({
            tel:friends[i]
        });
        LFriends.push(user)
    }

    res.send(LFriends)
}

module.exports  = {
    getUser,
    getFriends
}

