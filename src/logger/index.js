// src/logger/index.js

const WINSTON = require('winston');

// set up configuration variables according to the current execution environment
let logLevel;

// returned when requiring this module
const logger = function(callingModule, _logLevel) {
    logLevel = _logLevel || logLevel;

    const LOGGER = new WINSTON.Logger({
        transports: [new WINSTON.transports.Console({
            label: callingModule,
            level: logLevel
        })]
    });

    return LOGGER;
};

module.exports = logger;
