let d = new Date();
let hr = d.getHours();


function randomNum(min, max) {
    min = Math.ceil(15);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min + 1) + min)};

const beginning = [`Good morning! Let\'s get the day started with  `, 
  `Good Afternoon! Time for `, `Good Evening! Not to late to squeeze in `];

// add a space before first letter of any new elements added!!
const middle = [` butterfly kicks and  `, ` toe touches and  `, ` high-knees and `];

// add a space before first letter of any new elements added!!
const end = [' squats!', ' jumping-jacks!', ' lunges!', 'burpees!' ];

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
    finishedSentence.push(randomNum());
    sentenceMiddle();
    finishedSentence.push(randomNum());
    sentenceEnd();
    return finishedSentence.join('');
};



console.log(workoutDisplay())