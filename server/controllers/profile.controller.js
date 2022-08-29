const { User } = require('../db')

const getUser = (req, res)=>{
    console.log(req.session)
    res.sendStatus(200)
}

module.exports = { getUser }