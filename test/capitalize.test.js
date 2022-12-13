import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('Capitalize', function() {
    it("'string' capitalized should be 'String'", function() {
        expect(capitalize('string')).to.be.equal('String')
    });
    it("'WORD' capitalized should be 'Word'", function() {
        expect(capitalize('WORD')).to.be.equal('Word')
    });
    it("'Capital' capitalized should be 'Capital'", function() {
        expect(capitalize('Capital')).to.be.equal('Capital')
    });
});



