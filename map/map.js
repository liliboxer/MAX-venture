import api from '../src/api.js';

const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const fluff = document.getElementById('fluff');
const hp = document.getElementById('hp');
const gold = document.getElementById('gold');

const user = api.getUser();

if(!user) {
    window.location = './';
}

avatar.src = 'assets/' + 