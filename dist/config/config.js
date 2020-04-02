'use strict';

require('dotenv').config();

var config = {
    DATABASE: process.env.DB_USER,
    PASS: process.env.DB_PASS
};

module.exports = config;