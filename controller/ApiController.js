var apiCountyController=require('../model/ApiModelCountry');
module.exports.add_country=function(req,res){
    var country=new apiCountyController(req.body);
    country.save(function(error,result){
        if(error){
            res.status(400).json({error:error});
        }
        else{
            res.status(200).json({message:"Successfully country added",result:result});
        }
        
    })
}
