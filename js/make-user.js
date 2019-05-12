function makeUser(formData) {
    const fluff = parseInt(formData.get('fluff'));

    const user = {
        name: formData.get('name'),
        cat: formData.get('cat'),
        fluff: fluff,
        hp: 50,
        gold: 0,
        completed: {
            livingroom: false,
            bedroom: false,
            outdoors: false
        }
    };
    return user;
}

export default makeUser;

