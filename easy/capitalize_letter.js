// *  Letter Capitalize                                                                   *
// *  Using the JavaScript language, have the function LetterCapitalize(str) take the     *
// *  str parameter being passed and capitalize the first letter of each word. Words      *
// *  will be separated by only one space. 

const str = "is this working?";


const LetterCapitalize1 = (str) => {
  const words = str.split(" ");
  for(i in words) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}



// Using Chaining/Map
function LetterCapitalize2(str) {
    return str.split(" ").map(function(word, i) {
        return word[0].toUpperCase() + word.substr(1); 
    }).join(" ");
} 



// Using map + replace
function LetterCapitalize3(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}


//- ES6
const LetterCapitalize4 = (str) => ( str.split(' ').map(item => item[0].toUpperCase().concat(item.substr(1))).join(' '));
   

console.log(LetterCapitalize1(str));
console.log(LetterCapitalize2(str));
console.log(LetterCapitalize3(str));
console.log(LetterCapitalize4(str));