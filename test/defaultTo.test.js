import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', function() {
    it('Valid values should return themselves', function() {
        expect(defaultTo(1, 10)).to.be.equal(1);
        expect(defaultTo(80, null)).to.be.equal(80);
        expect(defaultTo([1,2,3], [1,2])).to.be.deep.equal([1,2,3]);
    });
    it('Null should return default value', function() {
        expect(defaultTo(null, 1)).to.be.equal(1);
        expect(defaultTo(null, [])).to.be.deep.equal([]);
        expect(defaultTo(null, undefined)).to.be.undefined;
        expect(defaultTo(null, null)).to.be.null;
    });
    it('Undefined should return default value', function() {
        expect(defaultTo(undefined, 1)).to.be.equal(1);
        expect(defaultTo(undefined, [])).to.be.deep.equal([]);
        expect(defaultTo(undefined, null)).to.be.null;
        expect(defaultTo(undefined, undefined)).to.be.undefined;
    });
});

