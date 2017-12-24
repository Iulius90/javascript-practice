// link: http://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives


//                    Count of positives / sum of negatives


// Given an array of integers return an array, where the first element is the count of 
// positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array:

// ATTENTION!
// The passed array should NOT be changed.

// For example:  input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
//               return [10, -65].

const countPositivesSumNegatives = input => {
  if (input == [] || input == null || input == '') {
    return [];
  } else {
    let pn = 0;
    let snn = 0;
    for(i in input) {
      if(input[i] > 0) { 
        pn = pn + 1;
      } else if (input[i] < 0){
        snn = snn + input[i]
      }      
    }
    return [pn,snn];    
  }
}
