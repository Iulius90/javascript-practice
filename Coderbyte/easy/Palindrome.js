// Palindrome

// Have the function PalindromeTwo(str) take the str parameter being passed and return 
// true if the parameter is a palindrome, (the string is the same forward as it is backward) 
// otherwise return false. The parameter entered may have punctuation and symbols but they 
// should not affect whether the string is in fact a palindrome. For example: "Anne, I vote 
// more cars race Rome-to-Vienna" should return true. Use the Parameter Testing feature in 
// the box below to test your code with different arguments. Do not modify the function name 
// within the code. Do not put any code outside of the function and use the return keyword to 
// return your answer from within the function.

const x = "Anne, I vote more cars race Rome-to-Vienna"


const PalindromeTwo = str => {

  str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();

  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) { revStr += str[i]; }

  return str == revStr;
}


console.log(PalindromeTwo(x))