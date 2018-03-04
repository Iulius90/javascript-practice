// link: https://www.codewars.com/kata/rock-paper-scissors/


// Rock Paper Scissors!


// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples: rps('scissors','paper') // Player 1 won!
//           rps('scissors','rock') // Player 2 won!
//           rps('paper','paper') // Draw!


const rps = (p1, p2) => {

  if(p1 === p2) {
    return 'Draw!'
  } else if (p1 === 'rock'  && p2 === 'scissors') {
    return 'Player 1 won!';
  } else if (p1 === 'paper'  && p2 === 'rock') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors'  && p2 === 'paper') {
    return 'Player 1 won!';
  } else { return 'Player 2 won!';}

};


// or
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
//shorter version to ^
var rps = function rps(p1, p2) {
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  return p1 === p2 ? "Draw!" : p2 === rules[p1] ? "Player 1 won!" : "Player 2 won!";
};



// or
const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}
// The test() method tests for a match in a string.

//shorter version to ^
const rps = (p1, p2) => p1 === p2 ? 'Draw!' :  `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
