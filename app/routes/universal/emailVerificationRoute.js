const express = require("express"),
router=express.Router();

const controller= require("../../controllers/universal/emailVerificationController");

router.post("/sendEmail",controller.sendEmail)
router.post("/verifyOTP" , controller.verifyOTP)

module.exports=router