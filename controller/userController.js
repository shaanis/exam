const mongoose = require('mongoose')
const users = require('../model/userModel')
const jwt = require('jsonwebtoken')

exports.registerController =async (req,res)=>{
    console.log("inside reg Controller");
    const {username,email,password}=req.body
   try{
     const existingUser = await users.findOne({email})
     if(existingUser){
        res.status(406).json("user already exist please login")
     }else{
       const newUser= new users({username,password,email})
       await newUser.save()
       res.status(200).json("Register successfull")
     }
   }catch(e){
    console.log(e);
    res.status(200).json(e)
   }
}

exports.loginController = async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password);
    try{
        const existingUser = await users.findOne({email,password})
       if(existingUser){
         const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
         if(token){
            console.log(token);
            res.status(200).json({user:existingUser,token})
         }
       }else{
        res.status(406).json("User not found. Please register")
       }
    }catch(e){
        console.log(e);
        res.status(401).json(e)
    }
}

exports.getUsersList = async(req,res)=>{
    try{
       const allUser = await users.find().select("username")
      res.status(200).json(allUser)
    }catch(e){
        console.log(e);
        res.status(401).json(e)
    }
}
exports.getUsersDetails = async(req,res)=>{
    try{
       const allUser = await users.find()
      res.status(200).json(allUser)
    }catch(e){
        console.log(e);
        res.status(401).json(e)
    }
}