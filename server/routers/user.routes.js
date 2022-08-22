const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const router = express.Router()

const { register, login, logOut } = require('../controllers/users.controllers')

router.post('/register', upload.single('portada'), register)
router.post('/login', login)
router.post('/logout', logOut)

module.exports = router
