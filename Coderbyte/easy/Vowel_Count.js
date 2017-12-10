 // Vowel Count
 // Using the JavaScript language, have the function VowelCount(str) take the str
 // string parameter being passed and return the number of vowels the string contains
 // (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this
 // challenge.   

const x = "All cows eat grass";


// - using two nested for loops
const vowels = [..."aeiou"];

const VowelCount = (str) => {
  let nrOfVowels = 0;
  str = str.toLowerCase();
  for(let i = 0; i < vowels.length; i++) {
    for(let j = 0; j< str.length; j++) {
      if (str[j] == vowels[i]) {
          nrOfVowels++;
      } 
    }
  }
  return nrOfVowels;

};


//- with replace method
const VowelCount2 = (str) => ( str.replace(/[^aeiou]/gi,"").length )

// remove everything that isn't a vowel
// g makes it search the whole string, i makes it case-insensitive
// return length of string



console.log(VowelCount2(x));

