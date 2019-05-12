import api from './api.js';
import loadProfile from './load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';

loadProfile();

const quests = api.getQuests();
const user = api.getUser();

const nav = document.getElementById('quest-options');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    let dom;
    if(user.completed[quest.id]) {
        dom = createCompletedQuest(quest);
    }
    else {
        dom = createQuestLink(quest);
    }
    nav.appendChild(dom);
}
