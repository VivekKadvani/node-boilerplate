const express = require('express')
const router = express.Router()
const userMiddleware = require('../middleware/route.js')
const { homepage, getUser, updateUser, deleteUser } = require("../controller/userController")
router.get('/', homepage)

router.post('/students', userMiddleware, getUser)

router.put('/students/:id', updateUser)

router.delete('/students/:id', deleteUser)

module.exports = router