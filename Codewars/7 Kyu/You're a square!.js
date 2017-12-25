// link: http://www.codewars.com/kata/youre-a-square


//                  You're a square!


// Given an integral number, determine if it's a square number:

// Examples
// isSquare(-1) // => false
// isSquare( 3) // => false
// isSquare( 4) // => true
// isSquare(25) // => true
// isSquare(26) // => false

const isSquare = n =>  Number.isInteger(Math.sqrt(n));
