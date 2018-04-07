// test/db/index.js
/* eslint-env node, mocha */

const assert = require('chai').assert;
const CONFIG = require('../../config');

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
