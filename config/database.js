//koneksi database

const mongoose = require("mongoose");

 mongoose.connect("mongodb+srv://restoran:restoran1234567890@cluster0-qg4r1.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true });

var db = mongoose.connection;

db.on('error', console.log.bind(console,'connection error'));
db.once('open',function(){
    console.log("connection OK")
});

module.exports=mongoose;

