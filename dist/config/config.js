'use strict';

require('dotenv').config();

var config = {
    databaseURL: process.env.DATABASE,
};

module.exports = config;