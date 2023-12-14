const express=require("express");
const app = express();
const router=express.Router();
const userController = require('../Controller/userController');
const userdatacontrol = require('../Controller/datacontrol')

app.use('/user/register',userController.register);
app.use('/user/login',userController.login);
app.use('/user/delete',userdatacontrol.deletedata);
app.use('/user/update',userdatacontrol.updatedata);
app.use('/user/getdata',userdatacontrol.getdata);
app.use("",router)   // this empity string ka mtlb ki jo jo multiples api bne gi tb use routing krne do with help of app variables
module.exports=app;


