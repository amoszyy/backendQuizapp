const express = require("express")
const mongoose = require("mongoose")
const quizuserModel = require("../models/user.model")
const quizModel = require("../models/quiz.model")
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
            res.send({message:"unable to register",status:false})
          
            console.log("operation failed")
        }else{
          
            console.log("successful")
            res.send({message:"Registered Successfully", details:form ,status:true})

        }
        
    })
    

  
}

const authenticateUser = (req, res)=>{
    // console.log(req.body)
    let {password}= req.body
    quizuserModel.findOne({email:req.body.email}, (err, user)=>{
        if(err){
            res.send({message:"server error", status:false})
            console.log("error guyy")
        } else{
            if(user){
                user.validatePassword(password, (err, same)=>{
                    if(err){
                        res.send({message:"Server error", status:false})
                    } else{
                        if(same){
                            res.send({message:"user logged in successfully", status:true})
                            console.log("correct")
                        } else{
                            res.send({message:"wrong password",status:false})
                            console.log("wrong")
                        }
                    }

                })
                // res.send({message:"e exist", status:true})
            } else{
                res.send({message:"wrong email"})
            }
        }
    })
}
module.exports = {getLandingPage, registerUser, authenticateUser}