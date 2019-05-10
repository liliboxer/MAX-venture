import api from '../js/api.js';
import questData from '../js/quest-data.js';

const test = QUnit.test;

QUnit.module('choice');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('gets quest by ID and returns quest', function(assert) {
    // arrange
    const expectedQuest = questData[1];
    // act
    const foundQuest = api.getQuest(expectedQuest.id);
    // assert
    assert.deepEqual(foundQuest, expectedQuest);

});