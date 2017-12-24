// Powers of Two                                                                       *
// Using the JavaScript language, have the function PowersofTwo(num) take the num      *
// parameter being passed which will be an integer and return the string true if       *
// it's a power of two. If it's not return the string false. For example if the        *
// input is 16 then your program should return the string true but if the input is     *
// 22 then the output should be the string false                                       *

const x = -1;
const y = 4;
const z = 9;



const PowersofTwo = num => Math.sqrt(num) % 1 === 0;

// or 

const PowersofTwo2 = num =>  Number.isInteger(Math.sqrt(num));


console.log(PowersofTwo(x));
console.log(PowersofTwo(y));
console.log(PowersofTwo(z));


console.log(PowersofTwo2(x));
console.log(PowersofTwo2(y));
console.log(PowersofTwo2(z));