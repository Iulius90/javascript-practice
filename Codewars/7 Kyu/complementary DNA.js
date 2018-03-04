// link: http://www.codewars.com/kata/complementary-dna


//                      Complementary DNA


// In DNA strings, symbols "A" and "T" are complements of each other, 
// as "C" and "G". You have function with one side of the DNA (string, 
// except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"

const x = "ATTGC";
const y = "GTAT";

const DNAStrand = dna => {
  const dnaComp = { A: "T", T: "A", C: "G", G: "C" }

  let compSide ='';

  for(let i= 0; i<dna.length; i++) {
    compSide += dnaComp[dna[i]];
  }

  return compSide;

}

console.log(DNAStrand(x));
console.log(DNAStrand(y));