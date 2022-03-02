
const express = require('express')
const res = require('express/lib/response')
const productRoute = express.Router()
const Product= require('../models/Product')

productRoute.post('/produit', async(req,res)=> {
     let {name,type,description,rate,disponibilite} = req.body
     let {imageUrl}=req.file
     rate=Number(rate)
     try {

    const product = new Product({
     name, 
     type,
     description,
     rate,
     disponibilite,
     imageUrl
    })

    await product.save()
    res.send({message:"product added",product})
         
     } catch (error) {

      res.status(500).send("sever error")
         
     }


} )

productRoute.get('/produit',async(req,res)=>{
     try {
         const products= await Product.find()
         res.send(products)
     } 
     catch (error) {
         res.status(500).send("server error")
     }
     
     })


productRoute.delete('/produit/:productId',async(req, res) =>
     { const {productId}= req.params;
     try { 
         await Product.findByIdAndDelete(productId);
         res.send ("Product deleted")
         
     } catch (error) {
         res.status(500).send("server error")
       
     }
     
     })


     
  

   productRoute.put('/produit/:productId',async(req, res)=>
   {const {productId} = req.params;
   try {
       const product= await Product.findByIdAndUpdate(productId,{$set:{...req.body}});
       res.send({message:"product update",product});
       
   } catch (error) {
       res.status(500).send("server error");
       
   }
   
   })


   productRoute.put('/produit/rate/:productId',async(req, res)=>
   {const {productId} = req.params;
   try {
       const product= await Product.findByIdAndUpdate(productId,{$set:{rate:req.body.rate}});
       res.send({message:"rate update",product});
       
   } catch (error) {
       res.status(500).send("server error");
       
   }
   
   })


module.exports=productRoute 