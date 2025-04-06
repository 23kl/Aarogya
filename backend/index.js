const express=require("express")
const app=express()
const port=3000

app.listen(port,function(){
    console.log("app is listening on the port"+port)
})
