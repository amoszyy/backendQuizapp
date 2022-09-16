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
                            res.send({user, message:"user logged in successfully", status:true})
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
const getDashboard = (req, res)=>{
    let {token} = req.body
    console.log(req.body)
    quizuserModel.findOne({_id:token}, (err, result)=>{
        if(err){
            res.send({message:"couldn't find user"})
            console.log("session timed out")
        } else{
            res.send({message:"user found", result})
        }
    })

}

const setTest = (req, res)=>{
    let {question, optionA, optionB, optionC, optionD, correctAnswer, token, tofind, uid} = req.body
    // console.log(req.body)
    quizuserModel.findOne({_id:token}, (err, result)=>{

    })
    let form = new quizModel(req.body)
    form.save((err, data)=>{
        if(err){
            res.send({message:"unable to save question", err})
            console.log(err)
        }else{
            res.send({message:"question saved", data})
        }
    })


}
const getQuestion = (req, res)=>{
    let {tofind, token}= req.body
    console.log(req.body)
    quizModel.find({tofind:tofind}, (err, result)=>{
        if(err){
            res.send({message:"error occured",  err})
        } else{
            if(!result){
                res.send({message:"no questions"})

            } else{
                res.send({message:"here are the questions", result})
                console.log(result)
            }
            
        }
    })

}
const checkAnswer = (req, res)=>{
    let {uid, answer} =req.body
    quizModel.findOne({uid:uid}, (err, result)=>{
        if(err){
            res.send({message:"error occured while trying to process the question", err})
        } else{
            if(!result){
                res.send({message:"couldn't find the question", status:false})

            } else{
                res.send({message:"this is the question and it's answer", result, status:true})
                quizModel.find({correctAnswer:answer}, (err, data)=>{
                    if(err){
                        res.send({message:"error occured while trying to process the answer", err})

                    } else{
                        res.send({message:"found the answer", status:true})
                    }
                })
            }
        }
    })

}

module.exports = {getLandingPage, registerUser, authenticateUser, setTest, getDashboard, getQuestion, checkAnswer}