const userData = require('../model/usermodule');
// delete the data
exports.deletedata=async(req,res)=>{
    try{
        const user=await userData.findOneAndDelete({id:req.body.id});
        res.send("data delete succesfully "+user);     
    }
    catch(erro){
        console.log("Error "+erro.message);
    }
    }

    // update the data
    exports.updatedata = async(req,res)=>{
        try{
         const user=await userData.findOneAndUpdate({id:req.body.id},{name:req.body.name,age:req.body.age,email:req.body.email},{new:true});
         res.send("update succesfully "+user);     
     }
     catch(erro){
         console.log("Error "+erro.message);
     }
 }
//  get data

exports.getdata=async(req,res)=>{
    try{
        const data = await userData.findOne({id:req.body.id});
        res.send("data"+data)
    }
    catch(erro){
        console.log("Error "+erro.message);}
}

