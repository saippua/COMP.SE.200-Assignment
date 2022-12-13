import { expect } from 'chai';
import compact from '../src/compact.js';


describe('Compact', function() {
    const longArray = [0, 1, 2, 3, 4, 5, 6, 7];
    const falseyArray = [undefined, '', false, 0, NaN];
    const mixedArray = [0, 1, '', 2, undefined, 3, 4, NaN, 5, 6, false, 7]
    const emptyArray = [];

    it('Should remove falsey values from array', function() {
        expect(compact(mixedArray), "Mixed values").to.include.all.members(longArray)
        expect(compact(falseyArray), "Only Falsey values").to.be.empty;
    });
    it('Should not modify an array with no falsey values', function() {
        expect(compact(longArray)).to.be.equal(longArray);
    });
    it('Should always return an array', function() {
        expect(compact(longArray), "No falsey values").to.be.an('array');
        expect(compact(falseyArray), "Only falsey values").to.be.an('array');
        expect(compact(mixedArray), "Mixed values").to.be.an('array');
        expect(compact(emptyArray), "Mixed values").to.be.an('array');
    });
});
