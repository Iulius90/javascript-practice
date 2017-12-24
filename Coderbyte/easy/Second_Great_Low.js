// Second Great Low                                                                    *
// Using the JavaScript language, have the function SecondGreatLow(arr) take the array *
// of numbers stored in arr and return the second lowest and second greatest numbers,  *
// respectively, separated by a space. For example: if arr contains                    *
// [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and     *
// will contain at least 2 numbers. It can get tricky if there's just two numbers!     * 

const x = [7, 7, 12,7, 98, 106, 26];
const y = [2, 3];
const z = [7];


const SecondGreatLow = arr => {

  arr = [... new Set(arr) ].sort((a,b) => a - b);
  // get unique values, then sort from small to large

  const al = arr.length;

  return al > 2 ? `${arr[1]} ${arr[al - 2]}` : al == 2 ? `${arr[1]} ${arr[0]}` : `${arr[0]} ${arr[0]}` ;

}

console.log(SecondGreatLow(x))
console.log(SecondGreatLow(y))
console.log(SecondGreatLow(z))