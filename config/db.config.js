const mysql = require('mysql');

// mysql connection
const dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ammantravels',
    database: 'travels',
});

dbconnection.connect((error) => {
    if (error) throw error;
    console.log('Database Connected Successfully');
});

module.exports = dbconnection;