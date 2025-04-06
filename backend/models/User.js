const mongoose=require("mongoose")

const userSchema=new mongoose.Schmea({
    fullName:String,
    email:String,
    phoneNumber:String,
    password:String,
    role:{
        enum: ['patient', 'admin'],
        default: 'patient'
    }
}, { timestamps: true })

const User=mongoose.model("User",userSchema)

mongoose.exports=User