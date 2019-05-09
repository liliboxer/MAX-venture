const livingRoom = {
    id: 'living-room',
    title: 'The Living Room',
    description: `The living room is a wonderous place with lots to offer. Let's explore!`,
    choices: [{
        id: 'race',
        description: `Race around and play with anything that's on the floor`,
        result: `You get all your energy out but knock into the wall by accident.`,
        hp: -10,
        gold: 0
    }, {
        id: 'window',
        description: `Hop up onto the windowsill with the hopes that the window is open`,
        result: `The window is open! And the breeze ruffles your fluff. You even spot a neighborhood kitty!`,
        hp: 20,
        gold: 10
    }, {
        id: 'nap', 
        description: `Curl up in the chair for a nice nap`,
        result: `The chair is freshly warm from when mom was sititng in it and you quickly fall 
        asleep. However, the next thing you know it, you're jolted awake by the kid you live with`,
        hp: -15,
        gold: 0
    }],
};

const bedroom = {
    id: 'bedroom',
    title: 'The Bedroom',
    description: `Your homebase. Your safe space. Let's see what shennanigans you can get up to.`,
    choices: [{
        id: 'closet',
        description: `Mom left her closet door open for you to explore!`,
        result: `You peer in and there's some new things on the floor. Assessing that they aren't a threat, 
        you walk into the closet and discover some new soft things to sit on!`,
        hp: 20,
        gold: 20
    }, {
        id: 'plant',
        description: `You get a little bored and investigate the house plant`,
        result: `While the plant can't fight back, you begin chomping on it and realize it's a horrid flavor. Yuck! You
        do find a little critter on one of the leaves to become your friend!`,
        hp: -5,
        gold: 10
    }, {
        id: 'food', 
        description: `You much on your food`,
        result: `While you ate some of your food at breakfast, you find yourself hungry a few hours later. You 
        eat a little bit, but it isn't as tasty as it was at breakfast. It does though lead to a satisfactory
        poop and you instantly feel lighter and happier.`,
        hp: 5,
        gold: 0
    }],
};

const outdoors = {
    id: 'outdoors',
    title: 'The Great Outdoors',
    description: `Oh, the front yard. So close yet far away. But now is your chance to 
    be out there! Free! Like the wild kitty you were meant to be`,
    choices: [{
        id: 'tree',
        description: `You climb a tree!`,
        result: `Let's put your claws to work. You bound up a tree and are so high up! This tires you out though, 
        and the trip down is a little bumpier.`,
        hp: -10,
        gold: 10
    }, {
        id: 'friends',
        description: `You run into some fellow neighborhood kitties`,
        result: `The kitty is cautious at first, but after some brief exchanges you both see how similiar 
        you are. You end up becoming best friends and even swap cat toys!`,
        hp: 40,
        gold: 25
    }, {
        id: 'hunt', 
        description: `Mouse! You can't help but chase after it`,
        result: `Your cat-reflexes pay off and you get it! You must bring it home to mom and show it off.`,
        hp: 10,
        gold: 40
    }],
};

const quests = [livingRoom, bedroom, outdoors];

export default quests;
