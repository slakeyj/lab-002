'use strict';

//Asks for the user's name.
/*
var userName = prompt('What is your name?');
alert('Hello ' + userName + '!');
console.log('The user\'s name is ' + userName + '.');

//Variable to track correct answers.
var totalCorrect = 0;

//Prompt asking if Susanna has ever been to Japan.
var beenToJapan = prompt('Question 1: Has Susanna ever been to Japan?');

if (beenToJapan.toLowerCase() === 'yes' || beenToJapan.toLowerCase() === 'y') {
  alert('That\'s incorrect, but she hopes to someday!');
} else {
  alert('That\'s correct!  Hopefully she\'ll get to go someday!');
  totalCorrect++;
  console.log('The total correct is ' + totalCorrect);
}
console.log('The answer given to beenToJapan is ' + beenToJapan);

// Prompt asking if Susanna enjoys doing yoga.
var enjoysYoga = prompt('Question 2: Does Susanna enjoy doing yoga?');

if (enjoysYoga.toLowerCase() === 'yes' || enjoysYoga.toLowerCase() === 'y') {
  alert('That\'s correct! It helps keep her feel low-stress and bendy!');
  totalCorrect++;
  console.log('The total correct is ' + totalCorrect);
} else {
  alert('That\'s incorrect!  Susanna enjoys yoga to keep herself flexible and to decrease her stress levels.');
}
console.log('The answer given to enjoysYoga is ' + enjoysYoga);

//Prompt asking if Susanna's favorite vegetable is radishes.
var likesRadishes = prompt('Question 3: Are radishes Susanna\'s favorite vegetable?');

if (likesRadishes.toLowerCase() === 'yes' || likesRadishes.toLowerCase() === 'y') {
  alert('That is incorrect.  She finds them to be absolutely repulsive!');
} else {
  alert('That\'s correct!  She finds them to be absolutely repulsive!');
  totalCorrect++;
  console.log('The total correct is ' + totalCorrect);
}
console.log('The answer given to likesRadishes is ' + likesRadishes);

//Prompts asking if Susanna has lived in Seattle all of her life.
var fromSeattle = prompt('Question 4: Has Susanna lived in Seattle all of her life?');

if (fromSeattle.toLowerCase() === 'yes' || fromSeattle.toLowerCase() === 'y') {
  alert('That\'s incorrect.  She grew up in Eastern Washington, but has lived in Seattle for 9 years.');
} else {
  alert('That\'s correct! She grew up in Eastern Washington, but has lived in Seattle for 9 years.');
  totalCorrect++;
  console.log('The total correct is ' + totalCorrect);
}
console.log('The answer given to fromSeattle is ' + fromSeattle);

//Prompts asking if Susanna has 3 siblings.
var siblings = prompt('Question 5: Does Susanna have 3 siblings?');

if (siblings.toLowerCase() === 'yes' || siblings.toLowerCase() === 'y') {
  alert('That\'s correct! She has 2 brothers and 1 sister.');
  totalCorrect++;
  console.log('The total correct is ' + totalCorrect);
} else {
  alert('That\'s incorrect! She has 2 brothers and 1 sister.');
}
console.log('The answer given to siblings is ' + siblings);

//A guessing game to guess how many years I've been married.
*/
for (var i = 0; i < 4; i++) {
  var yearsMarried = prompt('Question 6: how many years has Susanna been married?');
  console.log('The user entered the number ' + yearsMarried + ' for yearsMarried.');
  if (yearsMarried > 8) {
    alert('Sorry, too high!');
  } else if (yearsMarried < 8) {
    alert('Sorry, too low!');
  } else {
    alert('That\'s correct!');
    totalCorrect++;
    console.log('The total correct is ' + totalCorrect);
    break;
  }
  if (i === 3) {
    alert('Sorry, you\'re out of guesses. I\'ve been married for 8 years.');
  }
}

//A game to guess a Seattle neighborhood I have lived in.
/*
var seattleNeighborhoods = ['lower queen anne', 'capitol hill', 'ballard', 'magnolia'];
var correct = false;
var guessNumber = 0;

while (guessNumber < 6 && correct === false) {
  var neighborhoodGuess = prompt('Question 7: Can you guess a Seattle neighborhood that Susanna has lived in?');
  neighborhoodGuess = neighborhoodGuess.toLowerCase();

  for (var neighborhoodIndex = 0; neighborhoodIndex < seattleNeighborhoods.length; neighborhoodIndex++) {
    var neighborhood = seattleNeighborhoods[neighborhoodIndex];
    if (neighborhood === neighborhoodGuess) {
      alert('Well done, that\'s correct!  I\'ve lived in Lower Queen Anne, Ballard, Capitol Hill, and Magnolia.');
      console.log('The user guessed ' + neighborhoodGuess + ' for neighborhoodGuess.');
      correct = true;
      totalCorrect++;
      console.log('The total correct is ' + totalCorrect);
    }
  }
  if (correct === false && guessNumber < 5) {
    console.log('That is incorrect');
    alert('Sorry, that\'s incorrect.  Please try again.');
  } else if (correct === false && guessNumber < 6) {
    alert('Sorry, you\'re all out of guesses. I\'ve lived in Lower Queen Anne, Ballard, Capitol Hill, and Magnolia.');
  }
  guessNumber++;
}

//Gives the user their final score.
alert('Thank you for playing, ' + userName + '! Your final score is ' + totalCorrect + ' out of 7.');
*/