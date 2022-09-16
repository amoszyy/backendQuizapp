const express = require("express")
const router = express.Router()
const {getLandingPage, registerUser, authenticateUser, setTest, getDashboard, getQuestion, checkAnswer}= require("../controllers/user.controller")
router.get("/",getLandingPage)
router.post("/signup", registerUser)
router.post("/login", authenticateUser)
router.post("/setquestion", setTest)
router.post("/dashboard", getDashboard)
router.post("/getquestions", getQuestion)
router.post("/checkanswer", checkAnswer)

module.exports = router;