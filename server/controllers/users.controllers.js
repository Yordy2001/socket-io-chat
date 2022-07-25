const bcript = require('bcrypt')
const { User } = require('../db')

const register = async(req, res) => {

    const { name, tel, info, password } = req.body
    const portada  =  req.file.filename
   
    try {
        const user = await User.findOne({
            where: {tel: tel}
        })
        if (user) {
            return res.sendStatus(400)
        }

        const hashPassword = await bcript.hash(password, 12)

        await User.create({
            full_name: name,
            tel: tel,
            password: hashPassword,
            portada: portada,
            info
        })
        res.status(201).json({msg:`usuario ${name} registrado` })

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const { tel, password } = req.body

    try {
        const user = await User.findOne({ 
            where: {tel: tel }
        })
        const isMatch = await bcript.compare(password, user.password)

        if (!user || !isMatch) {
            return res.sendStatus(400)
        }

        req.user = user
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { register, login }
