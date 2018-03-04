// link: https://www.codewars.com/kata/stringy-strings/


// Stringy Strings


// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.
// a string with size 6 should return :'101010'.
// The size will always be positive and will only use whole numbers.


function stringy(size) {
  var res = '';
  for (var i = 1; i <=size; i++) {
    res += i % 2;
  }
  return res;
}