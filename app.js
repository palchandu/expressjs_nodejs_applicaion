/*require the module*/
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
var dbConfig=require('./config/config');
/*routes require */
var user=require('./route/user');
var api=require('./route/api');

/*Mongoose db connection*/
var url="mongodb://"+dbConfig.user+":"+dbConfig.pass+"@localhost/learning?authSource=admin";
mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


/*use the module */
app.use(bodyparser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyparser.json({limit: '50mb',extended: true}));
/*routes use */
app.use('/user',user);
app.use('/api',api);
var port=4546;
app.listen(port,()=>{
    console.log('Application is running on port '+port);
});
module.exports=app;