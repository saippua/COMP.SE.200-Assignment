import { expect } from 'chai';
import eq from '../src/eq.js';

describe('Equal', function() {
    it('The same Primitive should be equal to itself', function() {
        const varStr = 'Test'
        const varInt = 7
        expect(eq(varStr, varStr)).to.be.true
        expect(eq(varInt, varInt)).to.be.true
    });
    it('Empty values of the same type should be equal', function() {
        expect(eq(undefined, undefined), 'undefined').to.be.true
        expect(eq(NaN, NaN), 'NaN').to.be.true
        expect(eq(null, null), 'null').to.be.true
    });
    it('Empty values of different types should not be equal', function() {
        expect(eq(undefined, NaN), 'undefined AND NaN').to.be.false
        expect(eq(undefined, null), 'undefined AND null').to.be.false
        expect(eq(NaN, null), 'NaN AND null').to.be.false
    });
    it('The same object should be equal to itself', function() {
        const object = {'Property': 1};
        expect(eq(object, object)).to.be.true
    });
    it('Different objects should not be equal', function() {
        const object1 = {'Property': 1};
        const object2 = {'Member': 2};
        const object3 = {'Property': 3};
        const object4 = {'Member':1};

        expect(eq(object1, object2), JSON.stringify(object1) + ' is equal to ' + JSON.stringify(object2)).to.be.false
        expect(eq(object1, object3), JSON.stringify(object1) + ' is equal to ' + JSON.stringify(object3)).to.be.false
        expect(eq(object2, object4), JSON.stringify(object2) + ' is equal to ' + JSON.stringify(object4)).to.be.false
    });
    it('Different objects with the same values should be not equal', function() {
        const object1 = {'Property': 1};
        const object2 = {'Property': 1};
        expect(eq(object1, object2)).to.be.false
    });
});

