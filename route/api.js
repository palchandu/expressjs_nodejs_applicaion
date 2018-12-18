var express=require('express');
var route=express.Router();
var apiController=require('../controller/ApiController');
route.post('/add_country',apiController.add_country);
module.exports=route;