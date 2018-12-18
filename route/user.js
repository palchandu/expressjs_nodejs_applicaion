var express=require('express');
var route=express.Router();

route.get('/',(req,res)=>{
    res.json({message:"Welcome to express js"});
})

module.exports=route;