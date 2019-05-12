import api from '../js/api.js';

const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('signUp sets user and returns on getter', function(assert) {
    const user = {
        name: 'Lili',
        cat: 'Max the napper',
        fluff: 10,
        hp: 50,
        gold: 0
    };

    api.saveUser(user);
    const result = api.getUser();

    assert.deepEqual(result, user);
});
