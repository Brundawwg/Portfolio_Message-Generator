let d = new Date();
let hr = d.getHours();


function randomNum(min, max) {
    min = Math.ceil(15);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min + 1) + min)};

const beginning = [`Good morning! Let\'s get the day started with ${randomNum()} `, 
  `Good Afternoon! Time for ${randomNum()} `, `Good Evening! Not to late to squeeze in ${randomNum()} `];

const middle = [`butterfly kicks and ${randomNum()} `, `toe touches and ${randomNum()} `, `high-knees and ${randomNum()} `];

const end = ['squats!', 'jumping-jacks!', 'lunges!', 'burpees!' ];

const finishedSentence = [];

const getTime = () => {
  return hr;
};

const sentenceStart = () => {
  if (hr < 11) {
    finishedSentence.push(beginning[0])
  } else if (hr > 12 && hr < 17) {
    finishedSentence.push(beginning[1])
  } else {
    finishedSentence.push(beginning[2])
  } 
  return finishedSentence;
};

const sentenceMiddle = () => {
    finishedSentence.push(middle[Math.floor(Math.random() * middle.length)]);

    return finishedSentence;
  
};

const sentenceEnd = () => {
    finishedSentence.push(end[Math.floor(Math.random() * end.length)]);

    return finishedSentence;
};

const workoutDisplay = () => {
    sentenceStart();
    sentenceMiddle();
    sentenceEnd();
    return finishedSentence.join('');
};



console.log(workoutDisplay())