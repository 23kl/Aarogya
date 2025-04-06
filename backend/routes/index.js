const express=require("express")
const adminRouter=require("./adminRouter")
const patientRouter=require("./patientRouter")

const router =express.Router()
router.use("/patient",patientRouter)
router.use("/admin",adminRouter)

module.exports=router
