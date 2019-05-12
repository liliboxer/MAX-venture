import makeUser from '../js/make-user.js';

const test = QUnit.test;

test('getting an object from form', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'Lili');
    formData.set('cat', 'Max the napper');
    formData.set('fluff', '10');

    const expected = {
        name: 'Lili',
        cat: 'Max the napper',
        fluff: 10,
        hp: 50,
        gold: 0,
        completed: {
            quest1: false,
            quest2: false,
            quest3: false
        }
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);

    //Assert
    assert.deepEqual(user, expected);
});