const express = require("express")
const router = express.Router()
const {getLandingPage, registerUser}= require("../controllers/user.controller")
router.get("/",getLandingPage)
router.post("/signup", registerUser)

module.exports = router;