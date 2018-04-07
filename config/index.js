// config/index.js
const CONFIG = {
    environment: 'development', // development, production
    development: {
        app: {
            port: 8081, // Default port number
            logLevel: 'debug', // error, warn, info, verbose, debug, silly
        },
        db: {
            uri: process.env.MONGODB_DEV_URI, // Name of the database
            name: process.env.MONGODB_NAME, // Host address
        },
    },
    production: {
        app: {
            port: 8081, // Default port number
            logLevel: 'info', // error, warn, info, verbose, debug, silly
        },
        db: {
            uri: process.env.MONGODB_PROD_URI, // Name of the database
            name: process.env.MONGODB_NAME, // Host address
        },
    },
};

module.exports = CONFIG;
