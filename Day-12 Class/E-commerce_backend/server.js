const express=require("express")
const connection=require('./config/db')
const app=express()
const env=require("dotenv")
env.config()
app.use(express.json())
const port=process.env.PORT 
connection()



const userRoute=require("./routes/userRoute");
app.use('/api',userRoute);
app.listen(port,()=>{
  console.log("Server running on port : ", port);
})