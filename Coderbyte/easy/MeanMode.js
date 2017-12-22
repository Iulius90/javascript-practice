// MeanMode
// Have the function MeanMode(arr) take the array of numbers stored in arr and
// return 1 if the mode equals the mean, 0 if they don't equal each other
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
// The array will not be empty, will only contain positive integers, and will not
// contain more than one mode.

// The mean is the usual average, so I'll add and then divide:
// The mode is the number that is repeated more often than any other, so 13 is the mode.

let x = [5, 3, 3, 3, 1];

const MeanMode = arr => {

  Mean = arr => {
    let sum = 0;
    for(i in arr) { sum +=arr[i] }
    return sum / arr.length;    
  }

  Mode = arr => {
    let mode = 0;
    let modeExists = false;
    for(let i = 0; i<arr.length; i++ ) {
      for(let j = i+1; j<arr.length; j++) {
        if (arr[i] == arr[j]) {
          mode = arr[i];
          modeExists = true; // used to break the outter loop, when a mode is found
          break;             // break interior loop if mode is found
        }
      }
      if (modeExists) {break;} // break exterior loop
    }
    return mode;
  }

  return Mean(arr) == Mode(arr) ? 1 : 0;

}


console.log(MeanMode(x))