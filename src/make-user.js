function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        cat: formData.get('cat'),
        hp: 50,
        gold: 0
    };

    return user;
}

export default makeUser;

