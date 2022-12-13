import { expect } from 'chai';
import at from '../src/at.js';

describe('at', function() {
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
    it('At single path', function() {
        expect(at(user, 'username')).to.deep.equal(['Barney']);
        expect(at(user, 'products[0][info][weight]')).to.deep.equal([0.2]);
        expect(at(user, 'products[1][info]')).to.be.deep.equal([{'color':'brown', 'weight': 0.01, 'price': 0.85}]);
    });
    it('At multiple paths', function() {
        expect(at(user, ['username', 'products[0][info][price]'])).to.deep.equal(['Barney', 5.2]);
        expect(at(user, ['products[0]', 'products[1]'])).to.deep.equal(user['products']);
    });
});

