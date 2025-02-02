const express= require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose= require("mongoose");
const UserRoute= require("./routes/userRoute");
const studentModel = require("./models/studentModel");
const stuRoute =require("./routes/studentRoute")
// const paymentRoute= require("./routes/payment");

require("dotenv").config();

const Port=process.env.PORT || 8000
try{
    mongoose.connect("mongodb://127.0.0.1:27017/PoetReviewsystem").then(()=>{
        console.log("DB connected!!!")
    })
}
catch(error){
    console.log(error)
}
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

console.log("mdkjshk")
app.use("/users", UserRoute);
app.use("/employer", stuRoute)


app.listen(Port, ()=>{ 
     console.log(`Server run on ${Port}`)
})


