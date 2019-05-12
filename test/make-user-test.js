import makeUser from '../js/make-user.js';

const test = QUnit.test;

test('getting an object from form', function(assert) {
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
            livingroom: false,
            bedroom: false,
            outdoors: false
        }
    };

    const user = makeUser(formData);

    assert.deepEqual(user, expected);
});
