// test/db/index.js
/* eslint-env node, mocha */
const assert = require('chai').assert;
const APP_CONFIG = require('../../config');

// Set up configuration variables according to the current execution environment
const ENVIRONMENT = APP_CONFIG.environment;
const CONFIG = APP_CONFIG[ENVIRONMENT];

describe('Database', () => {
    it('Shouldn\'t connect without config', (done) => {
        try {
            const DB = require('../../src/db')();
            DB.close((err) => {
                assert.notExists(err);
            });
        } catch (err) {
            done();
        }
    });

    it('Should connect with config', (done) => {
        const DB = require('../../src/db')(CONFIG);
        DB.close((err) => {
            assert.notExists(err);
        });
        done();
    });
});
