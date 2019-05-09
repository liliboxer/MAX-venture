import api from '../js/api.js';
import questData from '../js/quest-data.js';

const test = QUnit.test;

QUnit.module('quest');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('returns quest data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = questData;

    //Act 
    // Call the function you're testing and set the result to a const
    const quests = api.getQuests();

    //Assert
    assert.deepEqual(quests, expected);

});