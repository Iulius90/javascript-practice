// link: https://www.codewars.com/kata/mumbling


//                              Mumbling


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const x = 'abcd';

const accum = (s) => s.split('')
                      .map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
                      .join('-');


console.log(accum(x));