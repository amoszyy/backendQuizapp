const express = require("express")
const mongoose = require("mongoose")
const quizuserModel = require("../models/user.model")
const getLandingPage = (req, res)=>{
    console.log("request was made!")
    res.send(
        [
            {firstname:'Kunle',age:500},
            {firstname:"John",age:900}

        ]
    )
}
const registerUser = (req,res)=>{
    console.log(req.body)
    quizuserModel.findOne({email:req.body.email}, (err,result)=>{
    })
    let form = new quizuserModel(req.body)
    form.save((err)=>{
        if(err){
            console.log(err)
            res.send({message:"unable to register",status:true})
          
            console.log("operation failed")
        }else{
          
            console.log("successful")
            res.send({message:"Registered Successfully", details:form ,status:true})

        }
        
    })
    

  
}
module.exports = {getLandingPage, registerUser}