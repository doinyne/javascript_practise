/*
Declare an array in JS.
Add elements to an array.
Get the length of an array.
Iterate over an array.
Filter elements of an array.
Execute code for each element of an array.
Give a function as an argument to another function.
*/

const addToBatch = (arr, num) => {
  if (arr.length > 10) {
    return arr;
  };
  return arr.concat(num);
};

console.log(addToBatch([1,2,3],4));
console.log(addToBatch([1,2,3,4],[5,6]));

// print [ 1, 2, 3, 4 ]


