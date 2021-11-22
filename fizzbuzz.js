

 
  function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz'; }
    else if (number % 3 === 0) {
      return 'Fizz'; }
    else if (number % 5 === 0) {
      return 'Buzz'; }
    else {
      return number;
    }
  } for (let number = 1; number < 51; number++)
  // Runs 5 times, with values of number 0 through 4.
  console.log(`Fizzbuzz result for ${number} is ${fizzbuzz(number)}`);

/* Fizzbuzz result for 1 is 1
Fizzbuzz result for 2 is 2
Fizzbuzz result for 3 is Fizz
Fizzbuzz result for 4 is 4
Fizzbuzz result for 5 is Buzz
Fizzbuzz result for 6 is Fizz
Fizzbuzz result for 7 is 7
Fizzbuzz result for 8 is 8
Fizzbuzz result for 9 is Fizz
Fizzbuzz result for 10 is Buzz
(...)
Fizzbuzz result for 15 is FizzBuzz
(...) */