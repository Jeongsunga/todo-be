const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller");

// 1. 회원가입 endPoint
router.post('/', userController.createUser);
// 2. 로그인 endPoint
router.post('/login', userController.loginWithEmail);

module.exports = router;