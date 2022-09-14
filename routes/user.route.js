const express = require("express")
const router = express.Router()
const {getLandingPage, registerUser, authenticateUser}= require("../controllers/user.controller")
router.get("/",getLandingPage)
router.post("/signup", registerUser)
router.post("/login", authenticateUser)

module.exports = router;