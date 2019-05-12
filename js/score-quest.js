import quests from "./quest-data.js";

function scoreQuest(user, choices, questId) {
    user.hp += choices.hp;
    user.gold += choices.gold;
    user.completed[questId] = true;
    return user;
}

export default scoreQuest;