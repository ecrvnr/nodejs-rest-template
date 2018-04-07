// src/routes/index.js

const LOGGER = require('../logger')('routes');
const BODY_PARSER = require('body-parser');
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// returned when requiring this module
const routes = function(handler) {

    LOGGER.log('info', 'Setting up routes.');
    ROUTER.use(BODY_PARSER.json());

    ROUTER.get('/', (req, res) => {
        LOGGER.log('debug', 'Calling route /');
        res.send('Home Page');
    });

    return ROUTER;
};

module.exports = routes;
