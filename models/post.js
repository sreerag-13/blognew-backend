const mongoose=require("mongoose")
let postschema=mongoose.Schema({

    "userId":{type:mongoose.Schema.Types.ObjectId},
    "Message":{type:String},
    "PostDate":{type:Date,default:Date.now}
})