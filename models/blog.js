const mongoose=require("mongoose")
let schema=mongoose.Schema({

    "Name":{type:String,require:true},
    "Email":{type:String,require:true},
    "Password":{type:String,require:true}
})
let blogmodel=mongoose.model("blogs",schema)

module.exports={blogmodel}

/*const mongoose=require("mongoose")
let schema=mongoose.Schema({

    "Message":{type:String,require:true},
    "":{type:String,require:true},
    "Password":{type:String,require:true}
})
let blogmodel=mongoose.model("blogs",schema)

module.exports={blogmodel}
const mongoose=require("mon*/