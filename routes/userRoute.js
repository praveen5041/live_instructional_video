const express=require('express')
const router=express.Router()
const user_ctl=require('../controls/user')

router.get('/',user_ctl.getUsers)
router.post('/signup',user_ctl.addUsers)
router.post('/login',user_ctl.Login)
router.post('/message',user_ctl.sendMessage)


module.exports=router;