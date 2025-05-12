require('dotenv').config();
const express = require('express'); 

const app = express();
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./sever/config/db');
const PORT = 8081|| process.env.PORT;


//connect the database

  

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./sever/routes/main.js'))

app.listen(PORT,()=>{
console.log(`This app is listening on port ${PORT}`);
}) 