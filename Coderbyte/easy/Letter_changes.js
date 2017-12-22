// Letter Changes
// Using the JavaScript language, have the function LetterChanges(str) take the str
// parameter being passed and modify it using the following algorithm. Replace every
// letter in the string with the letter following it in the alphabet
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
// (a, e, i, o, u) and finally return this modified string.

const abc = "abcdefghijklmnopqrstuvwxyz";
const sampleString = "is this working?";

const LetterChanges = (str) => { 

  const abc = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  let loc;

  for (letter in str) {

    loc = abc.indexOf(str[letter]);
    loc === 25 ? newStr += "a" : loc === -1 ? newStr += str[letter] : newStr += abc[loc + 1];

  }

  return newStr.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()});

}

console.log(LetterChanges(sampleString));
