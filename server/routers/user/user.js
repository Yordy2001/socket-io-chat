const { User } = require('../../db/')

const register = (req, res) => {

    const { name, tel, portada, info } = req.body
    try {
        await User.create({
            full_name: name,
            tel,
            portada,
            info
        })
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
    }
}

const login = ( req, res ) =>{
    const { tel } = req.body

    try {
        await User.findOne({
            where: tel,
        })
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }

}
