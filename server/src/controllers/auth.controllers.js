const bcript = require('bcrypt')
// const { User } = require('../db')

const register = async (req, res) => {

    // const { name, tel, info, password } = req.body
    // const portada  =  req.file?.filename
    
    // try {
    //     const user = await User.findOne({
    //         where: { tel: tel }
    //     })

    //     if (user) {
    //         return res.sendStatus(400)
    //     }

    //     const hashPassword = await bcript.hash(password, 12)

    //     // await sala_usuario.create({
    //     //     UserId: user.id
    //     // })

    //     await User.create({
    //         full_name: name,
    //         tel,
    //         password: hashPassword,
    //         portada,
    //         info
    //     })
    //     res.status(201).json({msg:`usuario ${name} registrado` })

    // } catch (error) {
    //     console.log(error)
    // }
}

const login = async (req, res) => {
    // const { tel, password } = req.body

    // try {
    //     const user = await User.findOne({ 
    //         where: {tel: tel }
    //     })
    //     const isMatch = await bcript.compare(password, user.password)

    //     if (!user || !isMatch) {
    //         return res.sendStatus(400)
    //     }

    //     req.session.isAuth = true
    //     req.session.user = user
    //     res.status(200).json(user)
    // } catch (error) {
    //     console.log(error)
    // }
}

const logOut = (req, res) =>{
    // req.session.isAuth = false
    // res.sendStatus(200)
    // return
}



module.exports = { register, login, logOut }
