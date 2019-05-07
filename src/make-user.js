function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        cat: formData.get('cat'),
        fluff: 10,
        hp: 50,
        gold: 0
    };

    return user;
}

export default makeUser;

