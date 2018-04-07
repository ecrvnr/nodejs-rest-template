// config/index.js

const APP = require('./app');
const DB = require('./db');

// Use this constant to set the current environment
const environment = 'development'; // 'development', 'production'

const CONFIG = {
    environment: environment, 
    app: APP(environment),
    db: DB(environment)
};

module.exports = CONFIG;
