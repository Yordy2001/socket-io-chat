const bcript = require('bcrypt')
const { User, user_contacts } = require('../db')

const register = async (req, res) => {

    const { name, tel, info, password } = req.body
    const portada  =  req.file?.filename
    
    try {
        const user = await User.findOne({
            where: { tel: tel }
        })

        if (user) {
            return res.sendStatus(400)
        }

        const hashPassword = await bcript.hash(password, 12)

        // await sala_usuario.create({
        //     UserId: user.id
        // })

        await User.create({
            full_name: name,
            tel,
            password: hashPassword,
            portada,
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
            return res.status(400).json({msg:'Credentials incorrect'})
        }

        req.session.user = user
        req.session.isAuth = true
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

const logOut = (req, res) =>{
    req.session.isAuth = false
    res.sendStatus(200)
    return
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
    res.send(friends)
}

module.exports = { register, login, logOut, getFriends }
