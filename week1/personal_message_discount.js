const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
];

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(namesAndDiscounts => 
    `Hi ${namesAndDiscounts[0]}! ${namesAndDiscounts[1]} off our best candies for you today!`);
};

console.log(generateMessages(namesAndDiscounts));