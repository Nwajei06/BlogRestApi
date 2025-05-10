require('dotenv').config();
const express = require('express'); 

const app = express();
const expressLayout = require('express-ejs-layouts');
const PORT = 8081|| process.env.PORT;


app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./sever/routes/main.js'))

app.listen(PORT,()=>{
console.log(`This app is listening on port ${PORT}`);
})