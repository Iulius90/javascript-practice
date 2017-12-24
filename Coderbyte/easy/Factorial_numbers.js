// Multiplicative Persistence                                                          *
// Using the JavaScript language, have the function FirstFactorial(num) take the num   *
// parameter being passed and return the factorial of it (ie. if num = 4,              *
// return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.    *   




// using recursion
function FirstFactorial(num) { 
  num <= 1 ? num = 1 : (num = num*FirstFactorial(num-1));
  return num; 
}

// using for loop
function FirstFactorial(num) { 
  if (num == 0 || num == 1) {return 1;}
  var tot = 1;
  for (var i = 2; i <= num; i++) {
    tot *= i;
  }
  return tot;
}


// using while loop
function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) { return 1;} 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}