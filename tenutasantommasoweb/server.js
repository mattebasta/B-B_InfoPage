const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const nodemailer = require('nodemailer');

const serverPort = 3001;

app.use(cors());
app.use(express.json());

/** basic db variables */
const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "root",
    multipleStatements: true
});

/** variable used to create database and tables all at once */
var createquery = 'CREATE DATABASE IF NOT EXISTS customers; use customers; CREATE TABLE IF NOT EXISTS reservations (name VARCHAR(255), surname VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), startdate DATE, enddate DATE, PRIMARY KEY (email))';

/** database creation */
db.connect(function(err){
    if(err) throw err;
    console.log("Database Connected");
    db.query(createquery, function(err, result){
        if(err) throw err;
        console.log("Database created");
    });
});

/** using http post method to send information from server to database 
 * making a query to insert all the information gathered from the client
*/
app.post("/create", (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const phone = req.body.phone;
    const startdate = req.body.startdate;
    const enddate = req.body.enddate;

    /** query to insert data from client */
    db.query('INSERT INTO reservations (name, surname, email, phone, startdate, enddate) VALUES (?,?,?,?,?,?)',
    [name, surname, email, phone, startdate, enddate],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        
        else {
            res.send("values inserted");
        }    
    });
    /**nodemailer method to create transport service with authentication token of the service */
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tenutasantommaso6@gmail.com',    
            pass: 'Tenutasantommaso6@'
        }
    });

    const customeremail = email; 
    /** information for nodemailer to send a custom message */
    const mailOptions = {
        from: 'tenutasantommaso6@gmail.com',
        to: customeremail,
        subject: 'Your booking resume',
        text: 'Hi' + ' ' + name + ' ' + surname + ' ' + 'below you will find the information of your booking. \n' + 
        'Name:' + ' ' + name + '\n' + 'Start date:' + ' ' + startdate + ' ' + 'End date: ' + ' ' + enddate
    };
    const info = transporter.sendMail(mailOptions);
});


app.listen(serverPort, () => {
    console.log("Server running on port " + serverPort)
})
