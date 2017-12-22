//  - REQUIREMENT - //

// DASH INSERT
// Using the JavaScript language, have the function DashInsert(str) insert dashes
// ('-') between each two odd numbers in str. For example: if str is 454793 the
// output should be 4547-9-3. Don't count zero as an odd number.

// Values to test:
const test = 454793;
const test2 = '9374553832076345';
//-------------------------------



const DashInsert = (x) => {
  x = (x + '').split(''); //split the string into single ch.
  let ans =[];            // create a new array

  // loop over every elem in the original array and push them into the new array
  // added "if" statement to check if the current number  and the following number
  // are odd numbers + check to see if the current number is the last one
  // (so we don't want to have the string finishing in '-'. if the last number is odd, ) 

  for(let i = 0; i<x.length; i++)  {  
    ans.push(x[i]);
    if ( x[i] % 2 != 0 && x[i+1] % 2 != 0 && i != x.length - 1 ) {
      ans.push('-');
    }
  }
  return ans.join('');  // join the elements of the new array to form the resulting string  
}



//--------------------------------
// Log results:
console.log(DashInsert(test));
console.log(DashInsert(test2));