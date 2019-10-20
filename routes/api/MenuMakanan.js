var express = require('express');
var router = express.Router();
var MenuMakanan = require('../../models/MenuMakanan_Schema');


router.get('/', function(req, res) {
  MenuMakanan.find().then(response => res.json(response)
  ).catch(err => res.status(500).json("Gagal Mengambil Data"))

});

router.post("/create", function(req,res){
 const {nama_menu,jenis,harga} = req.body;
 const newMenuMakanan = MenuMakanan({
     nama_menu,
     jenis,
     harga
 });
 newMenuMakanan.save().then( data =>
     res.json(data)
 )
});

router.delete("/delete/:idmenumakanan", function(req,res){
  //  console.log(req.params.idmenumakanan);
    MenuMakanan.findOneAndDelete(req.params.idmenumakanan,function(){
        res.json("Data Berhasil Terhapus");
    } )
});

router.put("/update/:idmenumakanan",function(req,res){
    MenuMakanan.findOneAndUpdate(req.params.idmenumakanan,
    {nama_menu:req.body.nama_menu, jenis:req.body.jenis, harga:req.body.harga},
    function(err){
        if(err){
            res.status(500).json("Data Tidak Berhasil Terupdate")
        }
        else{
            MenuMakanan.findById(req.params.idmenumakanan,function(error,response){
                res.json(response);
            })
            
        }
    })
})

module.exports = router;
