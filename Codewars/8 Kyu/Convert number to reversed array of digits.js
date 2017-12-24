// link: http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits


//                          Convert number to reversed array of digits


// Given a random number you have to return the digits of this number within an array in reverse order.

// Example: 348597 => [7,9,5,8,4,3]

const digitize = n => (n + '').split('').reverse().map(Number);