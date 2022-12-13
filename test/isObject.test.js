import { expect } from 'chai';
import isObject from '../src/isObject.js';

describe('isObject', function() {
    it('Primitives should not be objects', function() {
        expect(isObject(1), 'int').to.be.false;
        expect(isObject(null), 'null').to.be.false;
        expect(isObject(undefined), 'undefined').to.be.false;
        expect(isObject("Object"), 'Strings').to.be.false;
    });
    it ('Objects should be objects', function() {
        expect(isObject({}), 'Empty object').to.be.true;
        expect(isObject({'Property1': 1}), 'Non-empty object').to.be.true;
    });
    it('Arrays should be objects', function() {
        expect(isObject([]), 'Empty array').to.be.true;
        expect(isObject([1]), 'Non-empty array').to.be.true;
    });
    it('Functions should be objects', function() {
        expect(isObject(function() {})).to.be.true;
    });
    it('Regexs should be objects', function() {
        expect(isObject(/.*/g)).to.be.true;
    });
    it('Number objects should be objects', function() {
        expect(isObject(new Number(0))).to.be.true;
    });
    it('String objects should be objects', function() {
        expect(isObject(new String(''))).to.be.true;
    });
});

