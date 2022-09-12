const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const router = express.Router()

const { register, login, logOut, getFriends } = require('../controllers/auth.controllers')
const {getUser} = require('../controllers/user.controller')

router.post('/register', upload.single('portada'), register)
router.post('/login', login)
router.post('/logout', logOut)

router.get('/friends', getFriends)
router.get('/:id', getUser)

module.exports = router
