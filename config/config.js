require('dotenv').config();

const config = {
    databaseURL: process.env.DATABASE,
    DB_PASS: process.env.DB_PASS,
    DB_USER: process.env.DB_USER
    
};

module.exports = config;
