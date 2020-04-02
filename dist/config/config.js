'use strict';

require('dotenv').config();

var config = {
    databaseURL: process.env.DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS
};

module.exports = config;