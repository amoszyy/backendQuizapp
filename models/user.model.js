const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
let quizuserSchema = mongoose.Schema({
    firstnames:{required:true, type:String},
    lastnames:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String},
    


})
let saltRound =10
quizuserSchema.pre("save", function(next){
    console.log(this.password)
    bcrypt.hash(this.password, saltRound, (err, hashedPassword)=>{
        console.log(hashedPassword)
        if(!err){
            this.password= hashedPassword
            next()
        } else{
            console.log(err)
        }
    })
})
quizuserSchema.methods.validatePassword= function(password, callback) {
    console.log(password)
    console.log(this.password)
    bcrypt.compare(password, this.password, (err, same)=>{
        if(!err){
            callback(err, same)

        } else{
            next()
        }

    })
}
let quizuserModel = mongoose.model("quizuser_collection", quizuserSchema)
module.exports = quizuserModel;