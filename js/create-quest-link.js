function createQuestLink(quest) {
    const link = document.createElement('a');
    const h3 = document.createElement('h3');
    const appendedH3 = h3.appendChild(link);
    console.log(h3)
    console.log(appendedH3);

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);


    link.href = 'quest.html?' + searchParams.toString();

    link.textContent = quest.title;

    return h3;
    
}

export default createQuestLink;