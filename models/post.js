const mongoose=require("mongoose")
let postschema=mongoose.Schema({

    "userId":{type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    },
    "Message":{type:String},
    "PostDate":{type:Date,default:Date.now}
})
let postmodel=mongoose.model("posts",postschema)
module.exports=postmodel