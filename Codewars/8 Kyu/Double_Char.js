// link: https://www.codewars.com/kata/double-char


//               Double Char


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// doubleChar("String") ==> "SSttrriinngg"

function doubleChar(str) {
  var nStr = '';
  for(var i = 0; i<str.length; i++) {
    nStr += str[i]+str[i];
  }
  return nStr;
}

// or
const doubleChar = str => str.replace(/(.)/g, "$1$1");

// or
const doubleChar = (str) => str.split("").map(c => c + c).join("");
