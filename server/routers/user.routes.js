const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const router = express.Router()

const { register, login, logOut } = require('../controllers/auth.controllers')
const { getFriends, message } = require('../controllers/chats.controllers')


router.post('/register', upload.single('portada'), register)
router.post('/login', login)
router.post('/logout', logOut)

router.get('/friends/:tel', getFriends)


module.exports = router
