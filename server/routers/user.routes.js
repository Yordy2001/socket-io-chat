const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const router = express.Router()

const { register, login, logOut, getFriends } = require('../controllers/auth.controllers')
const { getUser } = require('../controllers/profile.controller')
const authMiddleware = require('../middleware/authenticate')

router.post('/register', upload.single('portada'), register)
router.post('/login', login)
router.post('/logout', logOut)

router.get('/friends', getFriends)
router.get('/profile', authMiddleware, getUser)

module.exports = router
