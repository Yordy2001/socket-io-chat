const UserModel = require('../db/models/user.model')


const getFriend = async (req, res) => {
    try {
        let { id } = req.params
        const user = await UserModel.findOne({ tel: id })
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
}

// Returun list of user's friends
const getFriends = async (req, res) => {
    try {
        const { tel } = req.session?.user
        const { friends } = await UserModel.findOne({ tel });
        let LFriends = [];

        for (i = 0; i <= friends.length; i++) {
            user = await UserModel.findOne({
                tel: friends[i]
            });
            LFriends.push(user)
        }

        res.status(200).json(LFriends)
    } catch (error) {
        console.log(error);
    }
}

const addFriends = async (req, res) => {

    try {

        const { id } = req.session.user
        const { tel } = req.body
        
        //Verify is user is register in the app 
        const friends = await UserModel.findOne({ tel })
        if (!friends) {
            return res.status(404).send({ msg: "Usuario no encontrado" })
        }

        //Verify is user is already add
        const isFriends = await UserModel.findOne({
            friends:{ $in: [tel]},
            id
        })
        if(isFriends){
            return res.status(409).json({msg:"Este usuario ya esta agregado"})
        }

        await UserModel.updateOne(id, {
            $push: { friends: friends.tel }
        },
            { new: true }
        )

        res.status(200).json({ msg: "Contacto agregado" })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addFriends,
    getFriend,
    getFriends
}
