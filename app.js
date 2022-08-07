const express = require('express');
const mysql = require('mysql2')

const connection = require('./config/config.js');

const PORT = 4500;
const app = express();


//Established connection to the database
connection.connect(function(err){
    if (err) throw err;
    console.log('Connection has been successfully established!')
 });


 app.get('/', function(req, res) {
    console.log('This is will be the landing page');
 })



 app.listen(PORT, () => {
    console.log(`Server has started on the port ${ PORT }`);
 });

