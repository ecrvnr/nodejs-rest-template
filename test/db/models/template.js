// test/db/models/todo.js
/* eslint-env node, mocha */

const Template = require('../../../src/db/models/template');
const assert = require('chai').assert;

describe('ToDo model', () => {
    it('Should be valid on creation', (done) => {
        let template = new Template();

        template.validate((err) => {
            assert.notExists(err);
            done();
        });
    });
});
