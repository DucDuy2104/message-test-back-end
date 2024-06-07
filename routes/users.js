var express = require('express');
var router = express.Router();
const {UserController}= require('../controller')
router.post('/register', async (req, res, next) => {
  const {name , email, password, role} = req.body
  const user =await UserController.register(name, email, password, role)
  return res.status(200).json({status: true, data: user})
  
})


router.post('/login', async (req, res, next) => {
  const {email, password} = req.body
  const user =await UserController.login(email, password)
  return res.status(200).json({status: true, data: user})
});
module.exports = router;
