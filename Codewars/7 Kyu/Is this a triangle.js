// link: http://www.codewars.com/kata/is-this-a-triangle


//                 Is this a triangle?


// Implement a method that accepts 3 integer values a, b, c. 
// The method should return true if a triangle can be built with the 
// sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

const isTriangle = (a,b,c) => {
  let x = [a,b,c].sort((a,b) => a - b)
  return x[0] + x[1] > x[2]; 
}
