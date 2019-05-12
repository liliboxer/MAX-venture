import quests from "./quest-data.js";

function scoreQuest(user, choices) {
    user.hp += choices.hp;
    user.gold += choices.gold;
    user.completed[quests.id] = true;
    return user;
}

export default scoreQuest;