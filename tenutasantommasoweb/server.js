const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');

const serverPort = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    multipleStatements: true
});


app.listen(serverPort, () => {
    console.log("Server running on port " + serverPort)
})
