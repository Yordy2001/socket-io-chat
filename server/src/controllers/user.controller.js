const  UserModel  = require('../db/models/user.model')


const getFriend = async (req, res) => {
    try {
        let {id} = req.params
        const user = await UserModel.findOne({ tel:id })
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
}

// Returun list of user's friends
const getFriends = async (req, res) => {
    try {
        const {id} =  req.session?.user
        const {friends} = await UserModel.findOne({id});
        let LFriends = [];
    
        for(i = 0; i <= friends.length; i++){
            user = await UserModel.findOne({
                tel:friends[i]
            });
            LFriends.push(user)
        }
    
        res.send(LFriends)
    } catch (error) {
        console.log(error);
    }
}

const addFriends = async (req, res) => {
    const {id} =  req.session.user
    const { tel } = req.body

    try {
        const friends = await UserModel.findOne({tel})
 
        if(!friends){
            return res.status(400).send({msg: "Usuario no encontrado"})
        }

        await UserModel.updateOne(id, {
            $push:  { friends: friends.tel }
        },
        {new:true}
        )

        res.status(200).json({msg: "Contacto agregado"})
    } catch (error) {
        console.log(error);
    }
}

module.exports  = {
    addFriends,
    getFriend,
    getFriends
}

