import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', function() {
    it('Number should be converted to strings', function() {
        expect(toString(-19), '-19').to.be.equal('-19')
        expect(toString(-0), '-0').to.be.equal('-0')
        expect(toString(0), '0').to.be.equal('0')
        expect(toString(28), '28').to.be.equal('28')
    });
    // it('Null value should return empty string', function() {
    //     expect(toString(null)).to.be.equal('');
    // });
    it('Arrays should return elements joined with commas', function() {
        expect(toString([0, 1, 2]), '[0, 1, 2]').to.be.equal('0,1,2');
        expect(toString([-0, null, 2]), '[-0, null, 2]').to.be.equal('-0,,2');
    });
});

