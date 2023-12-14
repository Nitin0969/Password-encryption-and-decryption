const express = require ('express');
const user =require ('../model/usermodule');
const userservice = require('../Services/userservices')
const crypto = require('../Helpers/crypto')



exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const email = inputdata.email;
        let password = inputdata.password;
        let encryptedpassword = crypto.encrypt(password);
        console.log('email',email);
        const activeuser = await userservice.findbyEmail(email);
        if(activeuser){
            res.status(500).json({message : "user with email already exist"});
        }
        else{
            let createdata = {
                ...inputdata,
                password :encryptedpassword
            }
       
        let user_details = await userservice.createuser(createdata)
        res.status(200).json({
        message:'success', data: createdata
        })

        } 
    }
    catch(error){
        res.status(500).json({message:"fail"})
    }
    
}
exports.login = async(req,res) => {
    try{
        const checkdata = req.body;
        const email = checkdata.email;
        const password = checkdata.password;
        const checkuser = await userservice.findbyEmail(email);
      
        if(checkuser){
            const encrypt_pass = checkuser.password;
          
            let decrypted_password = crypto.decrypt(encrypt_pass);
            if (decrypted_password == password) {
                res.status(200).json({ message: "Login Successfully"});
            } 
            else {
                res.status(200).json({
                  message: 'Wrong password! Try Again'
                });
              } 
        }
        else{
            res.status(200).json({
                message : 'Wrong Credentials! Try Again'
            })
        }
    }
    catch(error){
        res.status(500).json({message:"fail"})
    }

}