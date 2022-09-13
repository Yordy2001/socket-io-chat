const { User } = require('../db')

const getUser = async (req, res) => {
    console.log(req.params);
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

module.exports  = {getUser}

