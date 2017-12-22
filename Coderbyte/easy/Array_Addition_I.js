// Array Addition I                                                                    *
// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array *
// of numbers stored in arr and return the string true if any combination of numbers   *
// in the array can be added up to equal the largest number in the array, otherwise    *
// return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the      *
// output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, *
// will not contain all the same elements, and may contain negative numbers.           *    



// *  Steps for solution                                                                  *
// *    1) Sort array in ascending order.                                                 *
// *    2) Remove largest number from array and store in largest                          *
// *    3) Loop through each number in array                                              *
// *    4) Add every other number to this number and see if total matches largest         *
// *    5) If match return True else return False


const x = [4, 6, 23, 10, 1, 3];

const ArrayAdditionI = (arr) => {

  arr = arr.sort((a,b) => a - b );
  const largestNr = arr.pop();
  var tot = 0;
    
  for (var i = 0; i < arr.length; i++){
    tot += arr[i];
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        tot += arr[j];
        if (tot == largestNr) {
          return true;
        }
      }
    }
      
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        tot -= arr[k];
        if (tot == largestNr) {
          return true;
        }
      }
    }
    tot = 0;
  }
    
  return false; 


}

console.log(ArrayAdditionI(x));