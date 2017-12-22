// Letter Count I                                                                      *
// Have the function LetterCountI(str) take the str parameter being passed and return  *
// the first word with the greatest number of repeated letters. For example:           *
// "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
// (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
// with repeating letters return <b>-1</b>. Words will be separated by spaces.         *


const x = "Today, is the greatest day ever!";
const y = "aaa bbbb cccc";
const z = `I feel sorry for people who don't have dogs. 
           I hear they have to pick up food they drop on the floor.`;


const LetterCountI = str => {
  str = str.toLowerCase().replace(/[^a-zA-Z ]/g,"").split(' ');
  // convert to lowercase and replace all non alphabetical characters
  // split into an array of words

  let greatestDiff = 0;
  let ans;
  for(let i = 0; i<str.length; i++) {
    let word = str[i];
    let wordLgt = word.length;
    let wordSplit = word.split('').sort();
    // initialised some variables: current word, current word length,
    //   current word split into single characters and sorted alphabetically

    for(let j = 0; j<wordSplit.length; j++) {
      if (wordSplit[j] === wordSplit[j+1]) {
        wordSplit.splice(j,1);
      }
      // loop over the words character by character and remove duplicates

      const currentDif = wordLgt - wordSplit.length;
      // check the difference in length between the original word and the word without duplicates

      if(currentDif > greatestDiff) {
        greatestDiff = currentDif;
        ans = word;
      }
    }
  }
  
  return greatestDiff > 0 ? ans : -1;
};

console.log(LetterCountI(x));
console.log(LetterCountI(y));
console.log(LetterCountI(z));