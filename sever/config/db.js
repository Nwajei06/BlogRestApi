const mysql = require('mysql2');
 
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'techblog'
});

db.connect((err)=>{
    if (err) {
        console.error('Database connection failed', err.stack);
        return;
    }
    console.log('connected to database' + db.threadId);
})



module.exports = db;