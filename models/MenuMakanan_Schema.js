const mongoose = require("mongoose");

const MenuMakananSchema = new mongoose.Schema({
    nama_menu:{type:String, required:true},
    jenis:{type:String, required:true},
    harga:{type:String,required:true}
}, 
{
    timestamps:true
}
);

module.exports = mongoose.model('Menu_Makanan', MenuMakananSchema);

