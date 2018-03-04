// Word Count
// Using the JavaScript language, have the function WordCount(str) take the str
// string parameter being passed and return the number of words the string contains
// (ie. "Never eat shredded wheat" would return 4). 

// ** I have modified th initial requirement
// - words can be separated also by tabs, newlines not only spaces



const x = `Never     eat  shredded wheat  

  lorem ipsum
`;

const WordCount = (str) => ( x.replace(/\s\s+/g, ' ').split(" ").length);

//.replace(/\s\s+/g, ' ')
// - this replaces tabs/ new lines / multiple spaces with a single space character

console.log(WordCount(x));
