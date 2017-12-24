// Number Addition                                                                   
// Using the JavaScript language, have the function NumberSearch(str) take the str   
// parameter, search for all the numbers in the string, add them together, then      
// return that final number. For example: if str is "88Hello 3World!" the output     
// should be 91. You will have to differentiate between single digit numbers and     
// multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"     
// should return two different answers. Each string will contain at least one letter 
// or symbol.


const x = "88Hello 3World!"


const NumberSearch = str => {
  let sum = 0;
  str = str.replace(/[^0-9]+/g, ' ').split(' ');
  // replace all non-numeric characters with spaces and split the resulting array

  for (i in str) {
    if (str[i] != '') { sum += +str[i]; }
  }
  // loop through the array while checking for empty strings
  // +str[i] - > converts the strings to numbers 

  return sum;
}

console.log(NumberSearch(x))