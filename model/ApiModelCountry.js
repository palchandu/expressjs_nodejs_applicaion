var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var countrySchema=new Schema({
                  name:{ type:String,required:true,minlength:3},
                  createdAt:{ type:Date,default:Date.now},
                  updatedAt:{ type:Date,default:null}
});

module.exports=mongoose.model('country',countrySchema);