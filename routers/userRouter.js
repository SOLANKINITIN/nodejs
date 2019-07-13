const express = require('express');
const router = express.Router();
const User = require('../modal/User');

router.get("/",(req,res,next)=>{
    User.find()
    .then(userData=>{
        res.render('pages/user',{users:userData});
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/delete/:id',(req,res,next)=>{
    User.remove({_id:req.params.id})
    .then(data=>{
        console.log(data)
        res.redirect("/user")
    })
    .catch(err=>{
        console.log(err)
        res.redirect('/')
    })
})
module.exports = router;