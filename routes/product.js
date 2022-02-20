
const express = require('express')
const res = require('express/lib/response')
const productRoute = express.Router()
const Product= require('../models/Product')

productRoute.post('/produit', async(req,res)=> {
     let {name,type,description,rate,disponibilite} = req.body

     rate=Number(rate)
     try {

    const product = new Product({
     name, 
     type,
     description,
     rate,
     disponibilite,
    })

    await product.save()
    res.send({message:"product added",product})
         
     } catch (error) {

      res.status(500).send("sever error")
         
     }


} 

)

productRoute.get('/home',async(req,res)=>{
     try {
         const products= await Product.find()
         res.send(products)
     } 
     catch (error) {
         res.status(500).send("server error")
     }
     
     })

   productRoute.put('/p/:productId',async(req, res)=>
   {const {productId} = req.params;
   try {
       const product= await Product.findByIdAndUpdate(productId,{$set:{...req.body}});
       res.send({message:"product update",product});
       
   } catch (error) {
       res.status(500).send("server error");
       
   }
   
   })




module.exports=productRoute 