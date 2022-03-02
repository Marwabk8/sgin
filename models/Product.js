
const mongoose = require ('mongoose')
const schema = mongoose.Schema
const productSchema = new schema({
  
name :{type: String, required:true, unique:true },
type: {type: String, required:true},
description: {type: String, required:true},
rate : {type : Number, required: true,default:0 },
disponibilite :{type: String,required: true} ,
imageUrl: String,


})
 module.exports = mongoose.model('Product',productSchema)