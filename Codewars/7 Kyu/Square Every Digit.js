// link: http://www.codewars.com/kata/square-every-digit


//                       Square Every Digit


// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out.
// Note: The function accepts an integer and returns an integer

const squareDigits = n => +('' + n).split('').map(a => a * a).join('');
