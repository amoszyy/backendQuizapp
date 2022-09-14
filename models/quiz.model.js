const mongoose = require("mongoose")
let quizSchema = mongoose.Schema({
    question:{required:true, type:String},
    optionA:{required:true, type:String},
    optionB:{required:true, type:String},
    optionC:{required:true, type:String},
    optionD:{required:true, type:String},
    correctAnswer:{required:true, type:String},


})
let quizModel = mongoose.model("quiz_collection", quizSchema)
module.exports = quizModel;