const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const { register, login, logOut } = require('../controllers/auth.controllers')
const {getUser, getFriends} = require('../controllers/user.controller')

const router = express.Router()

router.post('/register', upload.single('portada'), register)
router.post('/login', login)
router.post('/logout', logOut)

router.get('/friends', getFriends)
router.get('/:id', getUser)

module.exports = router
