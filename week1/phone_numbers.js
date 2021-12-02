/* 
Declare a function checkLength that takes a phone number (as a string) as argument, and returns true if this phone number contains 10 characters or less.
Now declare a function filterLongNumbers that takes an array of phone numbers. This function should return only numbers that contain 10 characters or less. It should make use of the function checkLength written previously.
*/

const checkLength = (phoneNumbers) => {
  return phoneNumbers.length <= 10;
};

const filterLongNumbers = (phoneNum) => {
  return phoneNum.filter(checkLength);
};

console.log(filterLongNumbers(['1763687364',
'4763687363',
'7867867862',
'aaaaaaaabbbbbbbcccccdddddddd']));