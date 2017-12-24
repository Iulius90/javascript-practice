// Swap Case
// Using the JavaScript language, have the function SwapCase(str) take the str
// parameter and swap the case of each character. For example: if str is "Hello World"
// the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

const x = 'Hello World 0!@$^';
const y = 'aAaAa';


const SwapCase = str => {
  return str.replace(/[a-z]/gi, a => a.toUpperCase() == a ? a.toLowerCase() : a.toUpperCase() )
}



console.log("\x1b[7m%s\x1b[0m", SwapCase(x));
console.log("\x1b[42m%s\x1b[0m", SwapCase(y));