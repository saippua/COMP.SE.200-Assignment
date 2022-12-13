import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', function() {
    describe('Positive cases', function() {
        it('Memberless container should be empty', function() {
            expect(isEmpty([]), 'Empty array []').to.be.true;
            expect(isEmpty({}), 'Empty object {}').to.be.true;
            expect(isEmpty(new Map()), 'Empty map Map()').to.be.true;
            expect(isEmpty(new Set()), 'Empty set Set()').to.be.true;
        });
    });
    describe('Negative cases', function() {
        it('Array with elements should not be empty', function() {
            expect(isEmpty([0, 1, 2]), 'Array [0, 1, 2]').to.be.false;
            expect(isEmpty([undefined]), 'Array [undefined]').to.be.false;
            expect(isEmpty([null]), 'Array [null]').to.be.false;
            expect(isEmpty([{}]), 'Array [{}]').to.be.false;
        });
        it('Set with elements should not be empty', function() {
            expect(isEmpty(new Set([0, 1])), 'Set [0, 1]').to.be.false;
            expect(isEmpty(new Set([undefined])), 'Set [undefined]').to.be.false;
            expect(isEmpty(new Set([null])), 'Set [null]').to.be.false;
            expect(isEmpty(new Set([{}])), 'Set [{}]').to.be.false;
        });
        it('Map with elements should not be empty', function() {
            expect(isEmpty(new Map([[0, 1]])), 'Map [Int : Int]').to.be.false;
            expect(isEmpty(new Map([['key', 'value']])), 'Map [String : String]').to.be.false;
            expect(isEmpty(new Map([[null, null]])), 'Map [null : null]').to.be.false;
        });
        it('Object with properties should not be empty', function() {
            expect(isEmpty({'Property1': 1})).to.be.false;
        });
    });
    it('Non-collections should return true', function() {
        expect(isEmpty(25)).to.be.true;
        expect(isEmpty(3.2)).to.be.true;
    });
});
