// link: https://www.codewars.com/kata/to-square-root-or-not-to-square-root


//             #To square(root) or not to square(root)


// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]



function squareOrSquareRoot(arr) {

  for(var i = 0; i<arr.length; i++) {

    arr[i] = Math.sqrt(arr[i]) % 1 === 0 ? Math.sqrt(arr[i]) : Math.pow(arr[i],2);

  }
  return arr;

}


// or
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });
}


//or
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));