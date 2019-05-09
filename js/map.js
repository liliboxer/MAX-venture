import api from './api.js';

const name = document.getElementById('name');
const avatar = document.getElementById('avatar');
const fluff = document.getElementById('fluff');
const hp = document.getElementById('hp');
const gold = document.getElementById('gold');

const user = api.getUser();

if(!user) {
    window.location = './';
}

name.textContent = user.name;
avatar.src = '../assets/' + user.cat + '.png';
fluff.textContent = 'fluff: ' + user.fluff;
hp.textContent = 'hp: ' + user.hp;
gold.textContent = 'gold: ' + user.gold;