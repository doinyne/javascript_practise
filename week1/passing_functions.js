
/*
Declare a function notifyByEmail that accepts an email address as argument and returns the string 'Email sent to: <EMAIL>'.
Declare a function notifyByText that accepts a phone number (as a string) as argument and returns the string 'Text sent to: <PHONE NUMBER>'.
Now declare a generic function notify that accepts a first string argument (either an email or a phone), and the function to use in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
Use the function notify with the two previous functions to:
send an email to hello@makers.tech.test and get the expected output.
send a text to +10000000000 and get the expected output.
*/


const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('dean@gmail.com.test', notifyByEmail));
console.log(notify('02039920203', notifyByText));


// var is the 'legacy' keyword to declare a variable - its equivalent to 'let'

var total = 120;

// equivalent to
let total = 120;

// the function keyword can be used to declare functions

function add(a, b) {
  return a + b;
}

// equivalent to
const add = (a, b) => {
  return a + b;
}

// also equivalent to
var add = function (a, b) {
  return a + b;
}

// remember these examples when reading documentation, you might need to adapt the code to fit your current ES6 syntax

// JS object usuablly refers to a type of value, similar to a ruby hash.

const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);

// exercise code; 

const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

// print the value of the city attribute 'London'
// Print the value of the second hobbies value 'tennis'

console.log(person.address.city);
prints London

console.log(person.hobbies[1]);
prints tennis



