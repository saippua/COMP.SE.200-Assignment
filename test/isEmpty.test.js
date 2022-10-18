import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', function() {
    it('[1] should be empty', function() {
        expect(isEmpty([1])).to.be.true
    });
});
