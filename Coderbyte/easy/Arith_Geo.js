// Arith Geo
// Using the JavaScript language, have the function ArithGeo(arr) take the array of
// numbers stored in arr and return the string "Arithmetic" if the sequence follows
// an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If
// the sequence doesn't follow either pattern return -1. An arithmetic sequence is
// one where the difference between each of the numbers is consistent, where as in a
// geometric sequence, each term after the first is multiplied by some constant or
// common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric
// example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not
// be entered, and no array will contain all the same elements.

const x = [2, 4, 6, 8];
const y = [2, 6, 18, 54];
const z = [2, 6, 18, 12];



function ArithGeo(arr) { 
  let aDiff = [];
  let gDiff = [];
  let a,g;

  // create array with differences between numbers

  for (let i = 0; i < arr.length - 1; i++) {
    aDiff.push( arr[i+1] - arr[i] );
    gDiff.push( arr[i+1] / arr[i] );
  }
  

  // check to see of all elements are equal
  // if the elements in aDiff are the same it means it is an arithmetic sequence
  // if the elements in gDiff are the same it means it is an geometric sequence
  a = aDiff.every( (val, i, arr) => val === arr[0] )
  g = gDiff.every( (val, i, arr) => val === arr[0] )

  return a ? "Arithmetic" : g ? "Geometric" : -1 ;    
}


console.log(ArithGeo(x))
console.log(ArithGeo(y))
console.log(ArithGeo(z))