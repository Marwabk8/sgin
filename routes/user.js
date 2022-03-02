const express = require('express')
const router= express.Router()
const isAuth = require('../middlewars/isAuth')
const upload = require('../middlewars/upload')
const Product = require('../models/Product')

router.post('/ajouter',isAuth,upload.single('myProduct'),async(req,res)=>{
 let {name,type,description,rate,disponibilite} = req.body
 
   rate=Number(rate)
 if(!req.file){
return res.status(400).send('Error no file')
 }

 let imageUrl=req.file.filename
 try {
  const userProduct = new Product({

        name, 
        type,
        description,
        rate,
        disponibilite,
        imageUrl
       
       })

 await userProduct.save()
res.send("product uploaded");
 } catch (error) {
  res.status(500).send("serv error")   
     
 }


})


module.exports= router