const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countWords = (string) => {
  let wordList = string.toLowerCase().match(/[a-z]/gi).sort();
  // countWords('asdf') -> wordList = [ 'a', 'd', 'f', 's' ]
  // the input string has been cleaned of non-alphabetical characters, is lowercase, and alphabetically sorted into an array.
  const newOutput = JSON.stringify(
    // JSON.stringify() will create an object
    wordList.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
      // the reduce method will fill the object with all of the necessary letter counters, and increment them accordingly as we iterate over the wordList array.
    }, {})
  )
    .replace(/[, ]+/g, " ")
    .replace(/['"]+/g, "")
    .replace(/[{}]+/g, "");
  // the replace method calls change this JSON string into the desired output.
  // from the instructions: Output letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

  console.log(newOutput);
};

// terminal application stuff:
const getPrompt = () => {
  rl.question("Enter your String: ", (str) => {
    countWords(str);
    rl.question("Play again? (y/n)", (str) => {
      if (str === "y" || str === "Y") {
        getPrompt();
      } else {
        rl.close();
      }
    });
  });
};

getPrompt();
