// src/handler/index.js

const LOGGER = require('../logger')('handler');
const Template = require('../db/models/template');

// save an instance of ToDo to the database
function saveTemplate(req, callback) {

    // insert into TodoList Collection
    const TEMPLATE_ITEM = new Template({
        itemId: 1,
        item: 'Hello, World!',
        completed: false
    });

    TEMPLATE_ITEM.save((err, result) => {
        if (err) {
            LOGGER.log('error', 'Error while saving item');
            LOGGER.log('error', err);
        } else {
            LOGGER.log('debug', 'Item saved successfully: ' + TEMPLATE_ITEM.item);
            callback(result);
        }
    });
}

// returned when requiring this module
const HANDLER = {
    saveTemplate
};

module.exports = HANDLER;
