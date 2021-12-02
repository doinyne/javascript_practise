// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(car1.year);
// console.log(car1.model);
// console.log(car1.make);
// expected output: "Eagle"

// 'the syntax' new constructor[([arguments])]

// constructor
// A class or function that specifies the type of the object instance.

// arguments
// A list of values that the constructor will be called with.

function Person(name, age, car, location) {
  this.name = name;
  this.age = age;
  this.car = car;
  this.location = location;
}

let dean = new Person('Dean', 27, 'Ford', 'London');

console.log(dean.name);
console.log(dean.age);
console.log(dean.car);
console.log(dean.location);