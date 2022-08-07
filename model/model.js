const express = require('express');
const mysql = require('mysql2');
const { query } = require('../config/config.js');
const connection = require('../config/config.js');


let Student = function(student) {
    this.monthId = student.monthId;
    this.date = student.date;
    this.name = student.name;
    this.month = student.month;
    this.payment = student.payment;

};


Student.findAll = function(result) {
    connection.query("SELECT * FROM logger", function(err, res) {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};