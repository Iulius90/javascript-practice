// link: https://www.codewars.com/kata/find-the-next-perfect-square/


//               Find the next perfect square!


// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square
// after the one passed as a parameter. Recall that an integral perfect square is
// an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than -1 should be returned.
// You may assume the parameter is positive.

// Examples:  findNextSquare(121) --> returns 144

const findNextSquare = sq =>  Math.sqrt(sq) % 1 === 0 ?  Math.pow((Math.sqrt(sq)+1),2) : -1;
