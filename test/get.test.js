import { expect } from 'chai';
import get from '../src/get.js';

describe('Get', function() {
    const user = 
        { 
            'username': 'Barney', 
            'products': [
                {   
                    'name': 'tomato',
                    'info': {
                        'color': 'red',
                        'weight': 0.2,
                        'price': 5.2
                    }
                },
                {
                    'name': 'seeds',
                    'info': {
                        'color': 'brown',
                        'weight': 0.01,
                        'price': 0.85
                    }
                }
            ]
            
        };
    
    describe('Using path string', function() {
        it('Valid path', function() {
            expect(get(user, 'username')).to.be.equal('Barney');
            expect(get(user, 'products[0][name]')).to.be.equal('tomato');
            expect(get(user, 'products[0]')).to.be.equal(user['products'][0]);
        });
        it('Incorrect path', function() {
            expect(get(user, 'user')).to.be.undefined;
            expect(get(user, 'user[0]')).to.be.undefined;
            expect(get(user, 'products[tomato]')).to.be.undefined;
            expect(get(user, 'products[0][name][2]')).to.be.undefined;
        });
    });
    describe('Using path array', function() {
        it('Valid path', function() {
            expect(get(user, ['username'])).to.be.equal('Barney');
            expect(get(user, ['products', 0, 'name'])).to.be.equal('tomato');
            expect(get(user, ['products', 0])).to.be.equal(user['products'][0]);
        });
        it('Incorrect path', function() {
            expect(get(user, ['user'])).to.be.undefined;
            expect(get(user, ['user', 0])).to.be.undefined;
            expect(get(user, ['products', 'tomato'])).to.be.undefined;
            expect(get(user, ['products', 0, 'name', 2])).to.be.undefined;
        });
    });
});

