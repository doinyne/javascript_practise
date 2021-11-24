const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it ('should return fizz when divisable by 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
  });
  it ('should return buzz when divisable by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  });
  it ('should return fizzbuzz when divisable by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
  it ('should return the number when not divisable by 3 or 5', () => {
    expect(fizzbuzz(2)).toBe(2);
  });
});