const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {blogmodel}=require("./models/blog")
const bcrypt =require("bcryptjs")
let app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sreerag:sreerag@cluster0.onuj57g.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

app.post("/",(req,res)=>{


}
)

app.post("/sign",async(req,res)=>{
    let input=req.body
    let hashedpassword= await generateHashedPassword(input.Password)
    console.log(hashedpassword)
    input.Password=hashedpassword
    let user=new blogmodel(input)
    console.log(user)
    user.save()
    res.json({status:"success"})
})

app.listen("8080",()=>{
    console.log("server start")
})