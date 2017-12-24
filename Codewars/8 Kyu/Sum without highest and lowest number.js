// link: http://www.codewars.com/kata/sum-without-highest-and-lowest-number


//                Sum without highest and lowest number


// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:  { 6, 2, 1, 8, 10 } => 16
//           { 1, 1, 11, 2, 3 } => 6


// If array is empty, null or None, or if only 1 Element exists, return 0.

const sumArray = arr => {
  if(arr == null || arr.length <=1) {
    return 0;
  } else {
    let x = arr.sort((a,b) => a-b).splice(1);
    x.splice(-1, 1);
    let sum = 0;
    for(i in x) { sum += x[i] }

    return sum;
  }
}