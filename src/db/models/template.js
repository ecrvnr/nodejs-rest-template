// src/db/schema.js

const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

const TEMPLATE_SCHEMA = new Schema({
    itemId: Number,
    item: String,
}, { collection: 'Templates' });

// returned when requiring this module
const Template = MONGOOSE.model('Test', TEMPLATE_SCHEMA);

module.exports = Template;
