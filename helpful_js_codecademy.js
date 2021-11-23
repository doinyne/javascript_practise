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