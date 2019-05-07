import makeUser from '../src/make-user.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'Lili');
    formData.set('cat', 'Max the napper');
    formData.set('fluffy', 10);

    const expected = {
        name: 'Lili',
        cat: 'Max the napper',
        fluffy: 10,
        hp: 50,
        gold: 0
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);


    //Assert
    assert.deepEqual(user, expected);
});