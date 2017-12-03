// Simple Adding
// Using the JavaScript language, have the function SimpleAdding(num) add up all the
// numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.


// using for loop
const SimpleAdding = (num) => {
  let sum = 0;
  if (num < 0) { return NaN;} 
  for(let i = 0; i <= num; i++) { sum += i; }
  return sum;
}

// recursion with ES6
const SimpleAdding2 = (num) => ( num < 0 ? NaN : num === 0 ?  0 : num + SimpleAdding2(num - 1));




console.log(SimpleAdding(-1))
console.log(SimpleAdding(0))
console.log(SimpleAdding(1))
console.log(SimpleAdding(2))
console.log(SimpleAdding(5))

console.log(SimpleAdding2(-1))
console.log(SimpleAdding2(0))
console.log(SimpleAdding2(1))
console.log(SimpleAdding2(2))
console.log(SimpleAdding2(5))