// link: https://www.codewars.com/kata/isograms/


// Isograms


// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a string
// that contains only letters is an isogram. Assume the empty string is
// an isogram. Ignore letter case.

function isIsogram(str){
  var arr = str.toLowerCase().split(''); // turn string into array
  var arr2 = Array.from(new Set(arr));   // same array with no duplicates
  return arr.length === arr2.length;     // if they are the same length => Isogram
}