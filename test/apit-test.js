import api from '../js/api.js';

const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});


test('signUp sets user and returns on getter', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'Lili',
        cat: 'Max the napper',
        fluff: 10,
        hp: 50,
        gold: 0
    };

    //Act 
    // Call the function you're testing and set the result to a const
    api.saveUser(user);
    const result = api.getUser();

    //Assert
    assert.deepEqual(result, user);
});