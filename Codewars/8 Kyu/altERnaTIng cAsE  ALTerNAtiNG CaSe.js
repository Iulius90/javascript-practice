// link: https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/


//                    altERnaTIng cAsE  ALTerNAtiNG CaSe


// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define to_alternating_case(char*) such that each lowercase letter becomes
// uppercase and each uppercase letter becomes lowercase. For example:

String.prototype.toAlternatingCase = function () {
  str = "";
  for(var i = 0; i < this.length; i++) {
    if(this[i] === this[i].toUpperCase()) {
      str += this[i].toLowerCase();
    }
    else {
      str += this[i].toUpperCase();
    }
  }
  return str;
};


// or
String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase() : a.toUpperCase()).join('');
};


// or
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};