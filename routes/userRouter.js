const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("", userController.checkSession)
router.post("/register", userController.register)
router.post("/logIn", userController.logIn)
router.post("/logOut", userController.logOut)

module.exports = router;