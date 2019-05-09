import createQuestLink from '../js/create-quest-link.js';

QUnit.module('quest');

const test = QUnit.test;


test('creates correct link html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'outdoors',
        title: 'Quest 3: The Great Outdoors'
    };

    const expected = '<h3><a href="quest.html?id=outdoors">Quest 3: The Great Outdoors</a></h3>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const link = createQuestLink(quest);

    console.log(link.outerHTML);

    //Assert
    assert.equal(link.outerHTML, expected);
});