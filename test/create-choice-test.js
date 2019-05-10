import api from '../js/api.js';
import createChoice from '../js/create-choice.js';

const test = QUnit.test;

QUnit.module('choice');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('createChoice returns DOM elements', function(assert) {
    const choice = {
        id: 'cats',
        description: 'you like cats'
    };

    const expected = `<div><label>you like cats</label><input type="radio" name="cats" value="cats" id="cats"></div>`;

    const result = createChoice(choice);

    assert.equal(result.outerHTML, expected);

});