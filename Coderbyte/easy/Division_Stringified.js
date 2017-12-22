// Division Stringified
// Using the JavaScript language, have the function DivisionStringified(num1,num2)
// take both parameters being passed, divide num1 by num2, and return the result as
// a string with properly formatted commas. If an answer is only 3 digits long,
// return the number with no commas (ie. 2 / 3 should output "1"). For example:
// if num1 is 123456789 and num2 is 10000 the output should be "123,456".

const DivisionStringified = (num1,num2) => {
  let res = Math.round(num1 /num2);                          
  // first we divide and round the 2 numbers  

  res = (res+'').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");  
  // convert to string and use RegExp to format number as required

  return res;
  // return the string
};



//--------------------------------
// Log results:
console.log(DivisionStringified(2,3));
console.log(DivisionStringified(123456,100));
console.log(DivisionStringified(12345678935235,1000));