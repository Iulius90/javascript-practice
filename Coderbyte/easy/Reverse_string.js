// reversing a string

const x = "Some sample string.";

// option 1 - Array.from() + .reverse() + .join()
function reverseString1(str) {
  var reversed = Array.from(str) // creates an array with every character of the string as an array value
                               // *can pe replaced with  s.split('')
                 .reverse()    // reverses the array
                 .join("");    // joins all elements of the array into a string
  return reversed;
}




// option 2 - with a decrementing "for" loop
function reverseString2(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// option 3 - with a decrementing "for" loop with concatenation 
// (this seems to be the fastest)
function reverseString3(str) {
  for (var i = str.length - 1, o = ''; i >= 0; o += str[i--]) { }
  return o;
}



// ES6 
const reverseStringES6 = (str) => (str.split('').reverse().join(''));
//or
const reverseStringES6_2 = (str) => [...str].reverse().join('')


console.log(reverseString1(x));
console.log(reverseString2(x));
console.log(reverseString3(x));
console.log(reverseStringES6(x));
console.log(reverseStringES6_2(x));

// more info on the subject:
// https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript/16776621#16776621
// https://github.com/RickOrchard/scrapbook/blob/master/benchmarks/js-benchmark-stringreverse.js
// https://jsperf.com/string-reverse-function-performance
// https://github.com/mathiasbynens/esrever