import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', function() {
    it('[] should be empty', function() {
        expect(isEmpty([])).to.be.true
    });
});
