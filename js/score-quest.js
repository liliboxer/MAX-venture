function scoreQuest(user, choices) {
    user.hp += choices.hp;
    user.gold += choices.gold;
    return user;
}

export default scoreQuest;