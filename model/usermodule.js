const mongoose = require('mongoose')

const User = new mongoose.Schema({
    //  id:{type:Number},
     name :{type:String,require:true},
    //  age:{type:Number,},
     email:{type:String},
    //  mobile_number:{type:Number},
     password:{type:String}
})
// moongose library import hua fir schema bna and fir collection bna in mongodb
// const user is schema and make a collection in mongodb so we exports module using mongoose
// Moongoose model create a collections in mongodb with g3users and with model name user


module.exports = mongoose.model("G3User",User)