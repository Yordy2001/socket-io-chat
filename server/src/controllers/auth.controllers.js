const bcript = require('bcrypt')
const UserModel = require('../db/models/user.model')

const cloudinary = require('../utils/cloudinary.config')

const register = async (req, res) => {
    const { name, tel, info, password } = req.body

    try {
        const user = await UserModel.findOne({ tel });

        if (user) {
            res.status(400).json({ msg: `Este numero esta registrado` })
        }

        const cloudResult = await cloudinary.uploader.upload(req.file.path);
        const hashPassword = await bcript.hash(password, 12)

        await UserModel.create({
            name,
            tel,
            password: hashPassword,
            portada: cloudResult.secure_url,
            info,
            cloudinary_id: cloudResult.public_id
        })

        res.status(201).json({ msg: `usuario ${name} registrado` })
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const { tel, password } = req.body

        const user = await UserModel.findOne({ tel });
        const isMatch = await bcript.compare(password, user.password)

        if (!user || !isMatch) {
            return res.sendStatus(400)
        }

        req.session.isAuth = true
        req.session.user = user
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

const logOut = (req, res) => {
    req.session.isAuth = false
    res.sendStatus(200)
    return
}

module.exports = {
    register,
    login,
    logOut
}
