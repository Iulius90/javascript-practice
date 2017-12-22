// Find the longest word in a string
const x = "Some|_sample\n^3\tsentence@#@#%@#%s";


// option 1 - using "for" loop
function longestWord1(sen) {
  sen = sen.replace(/[^A-Za-z]/g, ' ')   //- replace all non letter characters with spaces
           .split(' ');                  //- split the string into words
    
  //- loop through that array and find the longest word  
  let lw = '';
  for(var i =0;i<sen.length;i++) {
    if(sen[i].length > lw.length) {
      lw =sen[i];
    }
  }

  return lw;
}
 


// option 2 - using "sort"
function longestWord2(sen){
  sen = sen.replace(/[^A-Za-z]/g, ' ') //- replace all non letter characters with spaces
           .split(' ');                //- split the string by spaces into an array


  // sorting the resulting array items in ascending order by length
  lw  = sen.sort(function(a,b){
    return b.length - a.length;
  })

  // return the first element of the sorted array 
  return lw[0];
}



// option 3- using "reduce"
function longestWord3(sen) {
  var lw = sen.replace(/[^A-Za-z]/g,' ')
              .split(' ')
              .reduce(function(a,b){
                return b.length > a.length ? b : a;
              });
  return lw;
}


// ES6

const longestWord_ES6 = sen =>  (
  sen.replace(/[^A-Za-z]/g,' ').split(' ').reduce((a, b) => a.length >= b.length ? a : b)
  );




console.log(longestWord1(x));
console.log(longestWord2(x));
console.log(longestWord3(x));
console.log(longestWord_ES6(x));