const express = require('express')
const userController = require('../controller/userController')
const router =  new express.Router()
//http://localhost:3000/register
router.post('/register',userController.registerController)
//http://localhost:3000/register
router.post('/login',userController.loginController)
//http://localhost:3000/allUsers
router.get('/allUsers',userController.getAllUsers)

module.exports = router