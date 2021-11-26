
// // will print after 1000 milliseconds


// setTimeout(() => {
// 	console.log('hello')
// }, 1000)

// // will print after 1000 milliseconds

// const callback = () => {
// 	console.log('hello')
// }

// setTimeout(callback, 1000)

// A C D B

// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 5000)

// console.log('D') 

// A C D B 

// console.log('A')

// const callback = () => {
// 	console.log('B')
// }

// console.log('C')

// setTimeout(callback, 0)

// console.log('D')

// 10 

// let a = 10

// const callback = () => {
// 	a = 20
// }

// setTimeout(callback, 1000)

// console.log(a)

// 10 

// let a = 10

// const callback = () => {
// 	a = 20
// }
// setTimeout(callback, 0)

// console.log(a)

// 20 

// let a = 10

// const callback = () => {
// 	a = 20
// 	console.log(a)
// }
// setTimeout(callback, 0)

// nothing

// const callback = () => {
// 	return "hello"
// }
// setTimeout(callback, 2000)


const fetchDataFromDatabase = () => {
  return setTimeout(() => {
    return { name: 'Bob' };
  }, 1000)
}

console.log(fetchDataFromDatabase());
