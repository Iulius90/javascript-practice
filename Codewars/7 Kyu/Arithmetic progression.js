// link: http://www.codewars.com/kata/arithmetic-progression


//                     Arithmetic progression


// In your class, you have started lessons about arithmetic progression.
// Since you are also a programmer, you have decided to write a function 
// that will return the first 'n' elements of the sequence with the given common 
// difference 'r' and first element 'a'. Result should be separated by comma and space.

// Example:

// arithmetic_sequence_elements(1, 2, 5) == '1, 3, 5, 7, 9'

const arithmeticSequenceElements = (a,r,n) => {
  let result = [];
  for(let i = 0; i <n; i++) {
    result.push(a + i*r);
  }
  return result.join(', ');
}
