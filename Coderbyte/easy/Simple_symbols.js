// *                                                                                      *
// *  Simple Symbols                                                                      *
// *  Using the JavaScript language, have the function SimpleSymbols(str) take the str    *
// *  parameter being passed and determine if it is an acceptable sequence by either      *
// *  returning the string true or false. The str parameter will be composed of + and =   *
// *  symbols with several letters between them (ie. ++d+===+c++==a) and for the string   *
// *  to be true each letter must be surrounded by a + symbol. So the string to the left  *
// *  would be false. The string will not be empty and will have at least one letter. 

var x = '++d+===+c++=+a+';
var y = '++d+===+c++=a+';
var z = '++d+===+c++=+a';

const SimpleSymbols = (str) => {
  const isItAlpha = /[a-zA-z]/;
  for (var i = 0; i <str.length; i++) {
    if(isItAlpha.test(str[i])) {
      if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
        return false;
      }
    } 
  }
  return true;
}

console.log(SimpleSymbols(x));
console.log(SimpleSymbols(y));
console.log(SimpleSymbols(z));
