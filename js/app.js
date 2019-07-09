'use strict'

// Prompt asking if Susanna has ever been to Japan.
var beenToJapan = prompt('Question 1: Has Susanna ever been to Japan?');

if (beenToJapan.toLowerCase() === 'yes' || beenToJapan.toLowerCase() === 'y') {
  alert('That\'s incorrect, but she hopes to someday!');
} else {
  alert('That\'s correct!  Hopefully she\'ll get to go someday!');
}
console.log('The answer given to beenToJapan is ' + beenToJapan);

var enjoysYoga = prompt('Question 2: Does Susanna enjoy doing yoga?');

if (enjoysYoga.toLowerCase() === 'yes' || enjoysYoga.toLowerCase() === 'y') {
  alert('That\'s correct! It helps keep her feel low-stress and bendy!')
} else {
  alert('That\'s incorrect!  Susanna enjoys yoga to keep herself flexible and to decrease her stress levels.');
}
console.log('The answer given to enjoysYoga is ' + enjoysYoga);

var likesRadishes = prompt('Question 3: Are radishes Susanna\'s favorite vegetable?');

if (likesRadishes.toLowerCase() === 'yes' || likesRadishes === 'y') {
  alert('That is incorrect.  She finds them to be absolutely repulsive!');
} else {
  alert('That\'s correct!  She finds them to be absolutely repulsive!');
}
console.log('The answer given to likesRadishes is ' + likesRadishes);

var fromSeattle = prompt('Has Susanna lived in Seattle all of her life?');

if (fromSeattle.toLowerCase() === 'yes' || fromSeattle.toLowerCase === 'y') {
  alert('That\'s incorrect.  She grew up in Eastern Washington, but has lived in Seattle for 9 years.');
} else {
  alert('That\'s correct! She grew up in Eastern Washington, but has lived in Seattle for 9 years.');
}
console.log('The answer given to fromSeattle is ' + fromSeattle);

var siblings = prompt('Does Susanna have 3 siblings?');

if (siblings.toLowerCase() === 'yes' || siblings.toLowerCase === 'y') {
  alert('That\'s correct! She has 2 brothers and 1 sister.')
} else {
  alert('That\'s incorrect! She has 2 brothers and 1 sister.');
}
console.log('The answer given to siblings is ' + siblings);