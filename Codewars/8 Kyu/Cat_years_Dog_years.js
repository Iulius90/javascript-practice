// link: http://www.codewars.com/kata/cat-years-dog-years/


//                  Cat years, Dog years


// I have a cat and a dog. I got them at the same time as
// kitten/puppy. That was humanYears years ago. Return their
// respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// Cat Years: 15 cat years for first year
           // +9 cat years for second year
           // +4 cat years for each year after that
// Dog Years: 15 dog years for first year
           // +9 dog years for second year
           // +5 dog years for each year after that

var humanYearsCatYearsDogYears = y => {
   return y == 1 ? [1, 15, 15] : y == 2 ? [2, 24, 24] : [y, 4 * y + 16, 5 * y + 14];
}

// or
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

// or
const humanYearsCatYearsDogYears = h => [h, (h - 1 ? 16 : 11) + 4 * h, (h - 1 ? 14 : 10) + 5 * h];