const express = require('express')
const upload = require('../utils/multer.config')
const authMiddleware = require('../middleware/authenticate')

const { register, login, logOut } = require('../controllers/auth.controllers')
const {getFriend, getFriends, addFriends} = require('../controllers/user.controller')

const router = express.Router()

router.post('/register', upload.single('portada'), register)
router.post('/login', login)
router.post('/logout', logOut)

router.get('/friends/:id', authMiddleware, getFriend)
router.get('/friends', authMiddleware, getFriends)
router.post('/friends', authMiddleware, addFriends)

module.exports = router
