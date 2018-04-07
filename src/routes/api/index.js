// src/routes/index.js
const LOGGER = require('../../logger')('routes/api');
const BODY_PARSER = require('body-parser');
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

// returned when requiring this module
const routes = function(handler) {

    LOGGER.log('info', 'Setting up api routes.');
    ROUTER.use(BODY_PARSER.json());

    ROUTER.get('/', (req, res) => {
        LOGGER.log('debug', 'Calling route /');
        res.send({
            message: 'Hello, World!'
        });
    });

    ROUTER.get('/template', (req, res) => {
        LOGGER.log('debug', 'calling route /template');
        handler.saveTemplate(req, (result) => {
            res.send(result);
        });
    });

    return ROUTER;
};

module.exports = routes;
