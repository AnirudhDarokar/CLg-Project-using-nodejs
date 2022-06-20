// const express  = require('express');
import express from 'express'
const app = express();
const port = process.env.PORT || '3001';
import web from './routes/web.js'
import connectDB from './db/connectDB.js'
const DATABASE_URL = process.env.DATABASE_URL ||"mongodb://localhost:27017"


// connection to database
connectDB(DATABASE_URL)
// setting static files || middleware
app.use(express.static('Public'));
app.use(express.urlencoded({extended:true}))

//setting template engine
app.set('view engine' , 'ejs');
// Loading routes
app.use('/', web);

app.listen(port , ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})