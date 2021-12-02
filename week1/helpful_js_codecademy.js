// helpful JS from codecademy 

// simple if else statment 

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// return positive or negative numbers

function myNumberSign(a) {
  if a > 0 
    return 'positive'
  else if a < 0 
    return 'negative'
  else
    return 0
}

// the 'and' && operator 

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

// the 'or' || operator

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

// the 'not' ! operator ( reverses or negates )

let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

// example of && logical operator

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep'); 
  } else {
    console.log('not bed time yet');
  }

// truthly and falsly values 

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

/*
The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
*/

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'

// a truthly example

let wordCount = 1000;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

Great! You've started your work!
This string doesn't seem to be empty.

// a falsely example

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

This string is definitely empty.

//falsy username output 

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

// short-hand code boolean condition, javascript assigns the truthy value to a variable if you use the || operator in your assignment 
// Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy.

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

// the let tool is truthy so it prints 'marker'

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

The marker is mightier than the sword.

// the let tool is falsy (empty string) so it uses the || operator and assigns 'pen' to the variable writingUtensil

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

The pen is mightier than the sword.

// a ternary operator heres an example of one in action 

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// is the same as 

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/*
In the example above:

  The condition, isNightTime, is provided before the ?.
  Two expressions follow the ? and are separated by a colon :.
  If the condition evaluates to true, the first expression executes.
  If the condition evaluates to false, the second expression executes.
  Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.
*/

//examples of ternary operators

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') :
console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!'): console.log("I don't love that!");

//example of an if, else if and else statement 

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// another example of else if statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

It's sunny and warm because it's summer!

// In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
'Papayas are $1.29'

// my example

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('Loser');
    break;
}

You get the gold medal!

/*
Way to go! Here are some of the major concepts for conditionals:

An if statement checks a condition and will execute a task if that condition evaluates to true.

if...else statements make binary decisions and execute different code blocks based on a provided condition.

We can add more conditions using else if statements.

Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.

The logical and operator, &&, or “and”, checks if both provided expressions are truthy.

The logical operator ||, or “or”, checks if either provided expression is truthy.

The bang operator, !, switches the truthiness and falsiness of a value.

The ternary operator is shorthand to simplify concise if...else statements.

A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
*/




