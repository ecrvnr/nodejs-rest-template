// src/db/index.js

const MONGOOSE = require('mongoose');
const LOGGER = require('../logger')('db');
const assert = require('assert');

// returned when requiring this module
const db = function(CONFIG) {

    LOGGER.log('info', 'Setting up database connection');

    // construct the database URI
    const DB_URI = `mongodb://${CONFIG.db.user}:${CONFIG.user.password}@${CONFIG.db.uri}/${CONFIG.db.name}`;

    // connect to the database
    LOGGER.log('debug', `Connecting to ${DB_URI}`);
    MONGOOSE.connect(DB_URI);
    const DB = MONGOOSE.connection;

    // when the connection throws an error
    DB.on('error', (err) => {
        LOGGER.log('error', `Failed to join database: ${err}`);
        throw err;
    });

    // when successfully connected
    DB.on('connected', () => {
        LOGGER.log('debug', 'Connected to database');
    });

    // when the connection is disconnected
    DB.on('disconnected', function() {
        LOGGER.log('debug', 'Disconnected from database');
    });

    // when the Node process ends, close the Mongoose connection 
    process.on('SIGINT', () => {
        LOGGER.log('debug', 'Disconnected from database through app termination');
        MONGOOSE.connection.close((err) => {
            assert(err === null);
            process.exit(0);
        });
    });

    return DB;
};

module.exports = db;
