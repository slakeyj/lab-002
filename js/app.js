'use strict';


var userName;
//Variable to track correct answers.
var totalCorrect = 0;

var yesAlerts = ['That\'s incorrect, but she hopes to someday!', 'That\'s correct! It helps keep her feel low-stress and bendy!', 'That is incorrect.  She finds them to be absolutely repulsive!', 'That\'s incorrect.  She grew up in Eastern Washington, but has lived in Seattle for 9 years.', 'That\'s correct! She has 2 brothers and 1 sister.'];

var noAlerts = ['That\'s correct!  Hopefully she\'ll get to go someday!', 'That\'s incorrect!  Susanna enjoys yoga to keep herself flexible and to decrease her stress levels.', 'That\'s correct!  She finds them to be absolutely repulsive!', 'That\'s correct! She grew up in Eastern Washington, but has lived in Seattle for 9 years.', 'That\'s incorrect! She has 2 brothers and 1 sister.'];

var questions = ['Question 1: Has Susanna ever been to Japan?', 'Question 2: Does Susanna enjoy doing yoga?', 'Question 3: Are radishes Susanna\'s favorite vegetable?', 'Question 4: Has Susanna lived in Seattle all of her life?', 'Question 5: Does Susanna have 3 siblings?'];

var yesPoints = [0, 1, 0, 0, 1];
var noPoints = [1,0, 1, 1, 0];


//Asks for the user's name.
function askName() {
  userName = prompt('What is your name?');
  alert('Hello ' + userName + '!');
  console.log('The user\'s name is ' + userName + '.');
}


function yesNoQuestions() {
  for(var index=0; index < yesAlerts.length; index++) {
    var userAnswer = prompt(questions[index]);
    
    if (userAnswer === 'yes' || userAnswer === 'y') {
      alert(yesAlerts[index]);
      totalCorrect += yesPoints[index];
    } else {
      alert(noAlerts[index]);
      totalCorrect += noPoints[index];
    }
  }
}


//A guessing game to guess how many years I've been married.
function questionMarried() {
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
}


//A game to guess a Seattle neighborhood I have lived in.
function questionNeighborhoods() {
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
}


askName();
yesNoQuestions();
questionMarried();
questionNeighborhoods();


//Gives the user their final score.
alert('Thank you for playing, ' + userName + '! Your final score is ' + totalCorrect + ' out of 7.');

