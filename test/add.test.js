import { expect } from 'chai';
import add from '../src/add.js';

describe('Add', function() {
    it('6 + 4 should be 10', function() {
        expect(add(6, 4)).to.be.equal(10);
    });
    it('-5 + 4 should be -1', function() {
        expect(add(-5, 4)).to.be.equal(-1);
    });
});

