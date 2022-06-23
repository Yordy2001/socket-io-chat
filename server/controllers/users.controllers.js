const bcript = require('bcrypt')
const { User } = require('../db')

const register = async(req, res) => {

    const { full_name, tel, portada, info } = req.body

    try {
        const user = await User.findOne({
            where: {tel: tel}
        })
        if (user) {
            return res.sendStatus(404)
        }

        const hashTel = await bcript.hash(tel, 12)

        await User.create({
            full_name,
            tel: hashTel,
            portada,
            info
        })
        res.sendStatus(201)

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const { tel } = req.body

    try {
        const user = await User.findOne({ where: tel })
        const isMatch = await bcript.compare(tel, user.tel)

        if (!user || !isMatch) {
            res.sendStatus(400)
        }

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { register, login }
