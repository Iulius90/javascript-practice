// link: http://www.codewars.com/kata/a-needle-in-the-haystack


//                               A Needle in the Haystack


// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

const findNeedle = h => "found the needle at position " + h.indexOf("needle");
