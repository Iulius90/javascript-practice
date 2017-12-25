// link: http://www.codewars.com/kata/get-the-middle-character


//                    Get the Middle Character


// You are going to be given a word. Your job is to return the middle character 
// of the word. If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

const getMiddle = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);