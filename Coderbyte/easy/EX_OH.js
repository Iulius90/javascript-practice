// Ex Oh
// Using the JavaScript language, have the function ExOh(str) take the str parameter
// being passed and return the string true if there is an equal number of x's and o's
// otherwise return the string false. Only these two letters will be entered in the
// string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the
// output should return false because there are 6 x's and 5 o's.    

const x ="xo ";
const y ="xxo";
const z ="xoo";


// with for loop
function ExOh(str) { 
  let ex = 0;
  let oh = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") { ex++; } 
    else if (str[i] == "o") { oh++; }
  }

  return ex == oh; 
         
}


// ES6 - using .replace()
const ExOh2 = (str) => ( str.replace(/[^x]/g, '').length === str.replace(/[^o]/g, '').length);



//testing
console.log(ExOh(x));
console.log(ExOh(y));
console.log(ExOh(z));

console.log(ExOh2(x));
console.log(ExOh2(y));
console.log(ExOh2(z));