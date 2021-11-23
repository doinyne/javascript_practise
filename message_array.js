const names = ['hello', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  return names.map(name => `Hi ${name}! 50% off our best candies for you today!`);
};

console.log(generateMessages(names));
