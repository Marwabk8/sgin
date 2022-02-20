const express = require('express');

const connectDb = require('./config/connectdb');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const storeRoute = require('./routes/store');
const app =express()
require('dotenv').config()

connectDb();
app.use (express.json())
app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)
app.use('/api/store',storeRoute)
app.listen(process.env.port,()=>console.log("port is running"))