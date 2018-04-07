// index.js

// set up configuration variables according to the current execution environment
const APP_CONFIG = require('./config');
const ENVIRONMENT = APP_CONFIG.environment;
const CONFIG = APP_CONFIG[ENVIRONMENT];
const DEFAULT_PORT = CONFIG.app.port;
const LOG_LEVEL = CONFIG.app.logLevel;

// set up logger
const LOGGER_MODULE = require('./src/logger');
const LOGGER = LOGGER_MODULE('server', LOG_LEVEL);

// require modules
const EXPRESS = require('express');
const HANDLER = require('./src/handler');
const DB_MODULE = require('./src/db');
const ROOT_ROUTES = require('./src/routes');
const API_ROUTES = require('./src/routes/api');

LOGGER.log('debug', `Starting server in ${ENVIRONMENT} environment`);

// set up modules
const APP = EXPRESS();
const DB = DB_MODULE(CONFIG);
const ROOT_ROUTER = ROOT_ROUTES(HANDLER);
const API_ROUTER = API_ROUTES(HANDLER);

// set up routes
APP.use('/', ROOT_ROUTER);
APP.use('/api', API_ROUTER);

// start listening
const SERVER = APP.listen(process.env.PORT || DEFAULT_PORT, function() {
    const PORT = SERVER.address().port;
    LOGGER.log('info', 'App now listening to port ' + PORT);
});
