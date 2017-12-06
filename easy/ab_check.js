// AB Check
// Using the JavaScript language, have the function ABCheck(str) take the str
// parameter being passed and return the string true if the characters a and b are
// separated by exactly 3 places anywhere in the string at least once
// (ie. "lane borrowed" would result in true because there is exactly three 
// between a and b). Otherwise return the string false.

const x = "lane borrowed";
const y = "something that will fail";
const z = "bsssa";


// with .match()
const ABCheck = (str) => {

  // check if a and b occur three characters apart
  const ab = str.match(/a.{3}b/g);
  // check if b and a occur three characters apart
  const ba = str.match(/b.{3}a/g);

  // return true if any of the two conditions are not null
  // *match will return an array with the values if it finds anything or null if it doesn't
  // . is a "wildcard" in regex that matches any character
  return (ab !== null) || (ba !== null) ? true : false;

};



// with .search()
const ABCheck2 = (str) => {
  const ab = str.search(/a...b/);
  const ba = str.search(/b...a/);

  // search() method searches a string for a specified value
  // and returns the position of the match or -1 if no match is found


  return (ab > -1) || (ba > -1) ? true : false;
}

console.log(ABCheck(x));
console.log(ABCheck(y));
console.log(ABCheck(z));

console.log(ABCheck2(x));
console.log(ABCheck2(y));
console.log(ABCheck2(z));
