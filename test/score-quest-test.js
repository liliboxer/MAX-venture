import api from '../js/api.js';
import scoreQuest from '../js/score-quest.js';

const test = QUnit.test;

QUnit.module('score');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('scores quest', function(assert) {
    const user = {
        hp: 50,
        gold: 0,
        completed: {
            quest1: false,
            quest2: false,
            quest3: false
        }
    };

    const choices = {
        hp: -5,
        gold: 10,
    };

    const expected = {
        hp: 45,
        gold: 10,
        completed: {
            quest1: true,
            quest2: false,
            quest3: false
        },
    };

    const result = scoreQuest(user, choices, 'quest1');

    assert.deepEqual(result, expected);
});
