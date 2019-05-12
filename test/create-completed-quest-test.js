import createCompletedQuest from '../test/create-completed-quest-test.js';

QUnit.module('quest');

const test = QUnit.test;

test('creates completed link', (assert) => {
    const quest = {
        id: 'livingroom',
        title: 'Quest 1: The Living Room',
    };

    const expected = '<span class="quest completed">Quest 1: The Living Room</span>';

    const dom = createCompletedQuest(quest);

    assert.equal(dom.outerHTML, expected);
});
