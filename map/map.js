import api from '../src/api.js';

const name = document.getElementById('name');
const cat = document.getElementById('cat');
const fluff = document.getElementById('fluff');
const hp = document.getElementById('hp');
const gold = document.getElementById('gold');

const user = api.getUser();

if(!user) {
    window.location = './';
}

name.textContent = user.name;
cat.src = './assets/' + user.cat;
fluff.textContent = 'fluff: ' + user.fluff;
hp.textContent = 'hp: ' + user.hp;
gold.textContent = 'gold: ' + user.gold;