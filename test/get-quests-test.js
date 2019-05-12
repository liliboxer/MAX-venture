import api from '../js/api.js';
import questData from '../js/quest-data.js';

const test = QUnit.test;

QUnit.module('quest');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('returns quest data', function(assert) {
    const expected = questData;

    const quests = api.getQuests();

    assert.deepEqual(quests, expected);
});
