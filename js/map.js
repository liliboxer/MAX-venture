import api from './api.js';
import loadProfile from './load-profile.js';
import createQuestLink from './create-quest-link.js';
import makeUser from './make-user.js';
// import createCompletedQuest from './create-completed-quest.js';


loadProfile();

const quests = api.getQuests();

const nav = document.getElementById('quest-options');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const link = createQuestLink(quest);
    nav.appendChild(link);


    
}let dom;
if(makeUser.completed[quest.id]) {
    dom = createCompletedQuest(quest);
} else {
    dom = createQuestLink(quest);
}

quests.append