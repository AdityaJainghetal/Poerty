const mongoose= require("mongoose");
const userSchema= new mongoose.Schema(
    {
     id:mongoose.Types.ObjectId,
     name:String,
     mobile:String,
     email:String,
     password:String

    }
)


module.exports= mongoose.model("user", userSchema);