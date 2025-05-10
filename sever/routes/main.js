const express = require('express');
const router =express.Router();


router.get('', (req, res)=>{
 const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog crated with NoodeJs, Express $ MongoDb"
 }



    res.render("index", {locals}); 
});
router.get('/about', (req, res)=>{
    res.render("about"); 
});
router.get('/home', (req, res)=>{
    res.render("home"); 
});

module.exports=router;
