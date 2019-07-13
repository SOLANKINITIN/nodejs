const express = require('express');
const router = express.Router();
const User = require('../modal/User');
router.get("/",(req,res,next)=>{
    res.render("pages/form")
})
router.post('/',(req,res,next)=>{
    const user = new User({
        username:req.body.username,
        password:req.body.password,
    })
    user.save((err)=>{
        if(err){
            res.redirect('/')
        }else{
            res.redirect("/user")
        }
    })
})
module.exports = router;