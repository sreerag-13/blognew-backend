const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const jwt=require("jsonwebtoken")
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

app.post("/signin",(req,res)=>{
let input=req.body
blogmodel.find({"Email":req.body.Email}).then((response)=>{
  if(response.length>0)
    {
       const dpassword=bcrypt.compareSync(input.Password,response[0].Password)
        if(dpassword)
            {
                jwt.sign({Email:input.Email},"blogApp",{expiresIn:"1d"},(error,token)=>{
                    if(error)
                    {
                        res.json({"status":"eroor","errorMessage":error}) 
                    }
                    else{
                        res.json({"status":"success","token":token,"userid":response[0]._id})
                    }
                })
               
            }
            else{
                res.json({"status":"incorrect password"})
            }
        }
    else{
        res.json({"status":"incorrect email"})
    }
}
)
.catch()
}
)



app.post("/sign",async(req,res)=>{
    let input=req.body
    let hashedpassword= await generateHashedPassword(input.Password)
    input.Password=hashedpassword
    blogmodel.find({Email:input.Email}).then((items)=>{
     if(items.length>0){
        res.json({"status":"email is already exit"})
     }
     else{
        let user=new blogmodel(input)
        user.save()
        res.json({"status":"success"})
     }
    }).catch()
    
})

app.listen("8080",()=>{
    console.log("server start")
})