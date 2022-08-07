const express = require('express');
const mysql = require('mysql2')

const connection = require('./config/config.js');

const app = express();


connection.connect(function(err){
    if (err) throw err;
    console.log('Connection has been successfully established!')
 });

 

