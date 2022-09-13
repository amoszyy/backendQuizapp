const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
let quizuserSchema = mongoose.Schema({
    firstnames:{required:true, type:String},
    lastnames:{required:true, type:String},
    emails:{required:true, type:String, unique:true},
    passwords:{required:true, type:String},
    


})
quizuserSchema.pre("save", function(next){
    console.log(this.passwords)
})
let quizuserModel = mongoose.model("quizuser_collection", quizuserSchema)
module.exports = quizuserModel;