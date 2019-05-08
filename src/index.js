import makeUser from './make-user.js';
import api from './api.js';

const userSignUp = document.getElementById('user-sign-up');
const fluffRange = document.getElementById('fluff');
const fluffDisplay = document.getElementById('fluff-display');
console.log(fluffRange);
fluffRange.addEventListener('change', () => {
    fluffDisplay.textContent = fluffRange.value;

    console.log(fluffRange.value);
});


userSignUp.addEventListener('submit', () => {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

    api.signUp(user);

    window.location = '../map/map.html';
});