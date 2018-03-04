// link: https://www.codewars.com/kata/duck-duck-goose/train/javascript


//                        Duck Duck Goose


// The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each player's
// head until one is finally chosen.
// Task: Given an array of Player objects (an array of associative arrays in PHP) and an
 // index (1-based), return the name of the chosen Player.

// Example: duckDuckGoose([a, b, c, d], 1) should return a.name
//          duckDuckGoose([a, b, c, d], 5) should return a.name

function duckDuckGoose(players, goose) {

  return players[(goose-1)%players.length].name;

}