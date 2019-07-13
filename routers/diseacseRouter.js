const express = require('express');
const router = express.Router();
const Diseacseform = require("../modal/diseacseform");
router.get("/",(req,res,next)=>{
    res.render("pages/form");
})


router.post("/", (req, res, next) => {
    
    const model = new Diseacseform ({
        DiseacseName: req.body.DiseacseName,
        Summary: req.body.Summary,
        Cause: req.body.Cause,
        Midicine: req.body.Midicine,
        NaturalMidicine: req.body.NaturalMidicine
    })
    model.save((error)=>{
        if(err){
            console.log("/")
        }else{
            console.log("/services")
        }
    })
}) 




module.exports = router;

