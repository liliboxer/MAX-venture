import api from './api.js';
import createChoice from './create-choice.js';
import loadProfile from './load-profile.js';
import findById from './find-by-id.js';
import scoreQuest from './score-quest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = api.getQuest(questId);
const user = api.getUser();

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const result = document.getElementById('result');
const resultMessage = document.getElementById('result-message');

title.textContent = quest.title;
image.src = './assets/' + quest.id + '.jpg';
description.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const questions = createChoice(choice);
    choiceForm.appendChild(questions);
    
}

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choiceButtons');
    const choice = findById(quest.choices, choiceId);

    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultMessage.textContent = choice.result;

    api.saveUser(scoreQuest(user, choice));
    loadProfile();

    // console.log(choice.result);


});