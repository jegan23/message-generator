const happyEmotions = ['Evening news is where they begin with ‘Good evening’, and then proceed to tell you why it isn’t.', 'If you think nobody cares if you’re alive, try missing a couple of payments.', 'Money talks but all mine ever says is good-bye.', 'Team work is important; it helps you put the blame on someone else.']
//console.log(happyJokes);
const depressedEmotions = ['Someone is always there to help you.', 'You not alone.', 'You are an important person to someone close to you.']
//console.log(depressedEmotions);
const angryEmotions = ['Take deep breaths.', 'Express your frustration to someone you care.', 'Defuse anger with humor.']
//console.log(angryEmotions);

const messageGenerator = () => {
    let happy = happyEmotions[Math.floor(Math.random() * happyEmotions.length)];
    //console.log(happy);
    let depressed = depressedEmotions[Math.floor(Math.random() * depressedEmotions.length)];
    //console.log(depressed);
    let angry = angryEmotions[Math.floor(Math.random() * angryEmotions.length)];
    //console.log(angry);
    console.log('If your feeling happy right now. Here is a joke to lighten up your day even more. ' + (happy));
    console.log('If your feeling down, remember that ' + (depressed));
    console.log('If your feeling angry, Remeber to ' + (angry));
};

messageGenerator();
