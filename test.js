
/** 
 * 1. Define function, "countWords"
 * 2. Convert input 'string to lowercase, make case-insensitive
 * 3. Use .replace method with regex "/\s/g" to remove white space
 * 4. Use .split to separate to individual characters
 * 5. Callback function: 
 * .reduce takes callback with 2 arguments: "acc" and the current letter "word".
 * 
*/

const countWords = string => {
    let wordList = string.toLowerCase().replace(/\s/gi, '').split('')
    return wordList.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1
       // incremements the count of the current letter "word" in the
       // accumulator object "acc". If letter doesn't exist in "acc",
       // it sets its count to 1.
      return acc
    }, {})
  }
  
  countWords('How many of each letter are there in this string');
  console.log(countWords('How many of each letter are there in this string'));
  //Returns an objet representing the frequencies of each letter in string.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  