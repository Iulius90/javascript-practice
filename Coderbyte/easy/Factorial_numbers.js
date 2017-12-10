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