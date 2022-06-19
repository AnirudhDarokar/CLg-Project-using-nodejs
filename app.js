// const express  = require('express');
import express from 'express'
const app = express();
const port = process.env.PORT || '3001';
import web from './routes/web.js'

// setting static files || middleware
app.use(express.static('Public'));

//setting template engine
app.set('view engine' , 'ejs');
// Loading routes
app.use('/', web);

app.listen(port , ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})