/**
 * 1. Define function, "countWords"
 * 2. Convert input 'string to lowercase, make case-insensitive
 * 3. Use .replace method with regex "/\s/g" to remove white space
 * 4. Use .split to separate to individual characters
 * 5. Callback function:
 * .reduce takes callback with 2 arguments: "acc" and the current letter "word".
 *
 */

const countWords = (string) => {
  let wordList = string.toLowerCase().match(/[a-z]/gi);
  return JSON.stringify(
    wordList.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {})
  )
    .replace(/[, ]+/g, " ")
    .replace(/['"]+/g, "")
    .replace(/[{}]+/g, "");
};

console.log(countWords("How many of each letter are there in this string"));

//Returns an objet representing the frequencies of each letter in string.
//does it produce valid output from a string
//doesnt take capitolization into consideration
//does not include punctuation
// does not include spaces
