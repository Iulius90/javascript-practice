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
