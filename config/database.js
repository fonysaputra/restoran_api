//koneksi database

const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost/restoran",{useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true });

var db = mongoose.connection;

db.on('error', console.log.bind(console,'connection error'));
db.once('open',function(){
    console.log("connection OK")
});

module.exports=mongoose;

