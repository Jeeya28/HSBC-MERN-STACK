const express=require('express');
const router=express.Router()
const {register,login,getAllUsers}=require("../controller/userController")
router.post('/register',register);
router.post('/login',login);
router.get('/get-allusers',getAllUsers)


module.exports= router;