//make sure .env has been loaded
require('dotenv').config();
//"require" pg (after 'npm i pg');
const pg = require('pg');
//use the pg CLient 
const Client = pg.Client;

const DATABASE_URL = process.env.DATABASE_URL;
//note: you will need to create the database!
const client = new Client(DATABASE_URL);

//call connect
client.connect()
//provide sucess/ failure log based on connection working
    .then(() => console.log('connect to db', DATABASE_URL))
    .catch(err => console.log('connection error', err));

    //listen for error on the connection and log them
client.on('error', err => {
    console.log('\n**** DATABASE ERROR ****\n\n', err);
});

    //export so other modules (files) can use
module.exports = client;