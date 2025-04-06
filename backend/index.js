const express=require("express")
const app=express()
const router=require("./routes/index")
const port=3000
const cors=require("cors")

app.use(cors())
app.use(express.json())
app.use("api/v1",router)

app.listen(port,function(){
    console.log("app is listening on the port"+port)
})
