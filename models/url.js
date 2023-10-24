 const mongoose = require("mongoose");
 const shortId = require("shortid")

 const userSchema = new mongoose.Schema({

    full:{
          
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        default:shortId.generate
    },
    clicks:{
        type:Number,
        required:true,
        default:0

    }

 })

 const User = mongoose.model("url",userSchema);
 module.exports = User;