import createQuestLink from '../js/create-quest-link.js';

QUnit.module('quest');

const test = QUnit.test;


test('creates correct link html', function(assert) {
    const quest = {
        id: 'outdoors',
        title: 'Quest 3: The Great Outdoors'
    };

    const expected = '<h3><a href="quest.html?id=outdoors">Quest 3: The Great Outdoors</a></h3>';

    const link = createQuestLink(quest);

    assert.equal(link.outerHTML, expected);
});
