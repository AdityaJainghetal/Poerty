const mongoose = require("mongoose");

const stuSchema  = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    userid: { type: mongoose.Types.ObjectId, ref: "user" },
        // userid:String
});

module.exports = mongoose.model("student", stuSchema );
