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

name.textContent = user.name;
fluff.textContent = 'fluff: ' + user.fluff;
hp.textContent = 'hp: ' + user.hp;
gold.textContent = 'gold: ' + user.gold;

console.log(gold.textContent);