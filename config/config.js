require('dotenv').config();

const config = {
    DATABASE: process.env.DB_USER,
    PASS: process.env.DB_PASS
};

module.exports = config;
