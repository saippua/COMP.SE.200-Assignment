import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy', function() {
    const users = [
        { 'user': 'Barney', 'active': true,  'points': 1, 'referrer': null },
        { 'user': 'Betty',  'active': true,  'points': 2, 'referrer': null },
        { 'user': 'Fred',   'active': false, 'points': 1, 'referrer': null },
        { 'user': 'Steve',  'active': false, 'points': 3, 'referrer': 'Barney' },
        { 'user': 'Aaron',  'active': false, 'points': 1, 'referrer': null },
        { 'user': 'Velma',  'active': true,  'points': 2, 'referrer': 'Betty' },
        { 'user': 'Marie',  'active': false, 'points': 1, 'referrer': 'Barney' },
    ];
    const products = {
        'tomato': { 'color': 'red' },
        'pepper': { 'color': 'red' },
        'flower': { 'color': 'red' },
        'bean': { 'color': 'green' },
        'salad': { 'color': 'green'}
    };
    it('Count by property of list of objects', function() {
        expect(countBy(users, value => value.active)).to.deep.equal({'true': 2, 'false': 3});
        expect(countBy(users, value => value.points)).to.deep.equal({'1': 3, '2': 1, '3': 0});
        expect(countBy(users, value => value.referrer)).to.deep.equal({'null': 3, 'Barney': 1, 'Betty': 0});
    });
    it('Count by property of object', function() {
        expect(countBy(products, value => value.color)).to.deep.equal({'red': 2, 'green': 1});
    });
});

