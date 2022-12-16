import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', function() {
    describe('Numbers to integer', function() {
        it('Integer', function() {
            expect(toInteger(51)).to.be.equal(51);
            expect(toInteger(-102)).to.be.equal(-102);
            expect(toInteger(-0)).to.be.equal(0);
        });
        it('Float', function() {
            expect(toInteger(85.3)).to.be.equal(85);
            expect(toInteger(85.9)).to.be.equal(85);
            expect(toInteger(-91.2)).to.be.equal(-91);
        });
        it('Number', function() {
            expect(toInteger(Number.MIN_VALUE)).to.be.equal(0);
            expect(toInteger(new Number(5))).to.be.equal(5);
            expect(toInteger(new Number(-100))).to.be.equal(-100);
        });
    });
    describe('String to integer', function() {
        it('Integer string', function() {
            expect(toInteger('642')).to.be.equal(642);
            expect(toInteger('-32')).to.be.equal(-32);
            expect(toInteger('-0')).to.be.equal(0);
            expect(toInteger('0')).to.be.equal(0);
            expect(toInteger('20.3')).to.be.equal(20);
            expect(toInteger('47.8')).to.be.equal(47);
            expect(toInteger('-10.2')).to.be.equal(-10);
        });
        it('Float string', function() {
            expect(toInteger('82.2')).to.be.equal(82);
            expect(toInteger('-52.8')).to.be.equal(-52);
        });
        it('Scientific string', function() {
            expect(toInteger('1.5e2')).to.be.equal(150);
            expect(toInteger('-1.982e3')).to.be.equal(-1982);
            expect(toInteger('200e-1')).to.be.equal(20);
        });
    });
    describe('Unexpected values', function() {
        it('Invalid strings', function() {
            const input = 'test';
            try {
                expect(toInteger(input)).to.be.oneOf([NaN, undefined, null]);
            } catch {
                expect(toInteger.bind(this, input)).to.throw()
            }
        });
        it('Invalid input type', function() {
            const input = {};
            try {
                expect(toInteger(input)).to.be.oneOf([NaN, undefined, null]);
            } catch {
                expect(toInteger.bind(this, input)).to.throw()
            }
        });
    });
});


