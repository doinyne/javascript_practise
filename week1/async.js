// const CANDIES_DB = ['Mars','Maltesers','Skittles','Fraise Tagada'];


// const fetchCandiesFromDataBase = (handleResultCallback) => {
//   console.log(CANDIES_DB);
//   }
// setTimeout(fetchCandiesFromDataBase, 2000);
// let readline = require('readline');

// const readline = require('readline-sync');
// const name = readline.question('Enter your name');

// console.log(`Your name is ${name}`);



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });




// rl.question("What is your name ", (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Your name is ${answer}`);

//   rl.close();
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favourite color? ', (answer) => {
  console.log(`Your favourite color is ${answer}`);
  rl.close();
});



