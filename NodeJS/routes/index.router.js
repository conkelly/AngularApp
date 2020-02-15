const express = require('express'); 
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.post('/req-reset-password', ctrlUser.ResetPassword);
router.post('/new-password', ctrlUser.NewPassword);
router.post('/valid-password-token', ctrlUser.ValidPasswordToken);

module.exports = router;