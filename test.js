
/** 
 * 1. Define function, "countWords"
 * 2. Convert input 'string to lowercase, make case-insensitive
 * 3. Use .replace method with regex "/\s/g" to remove white space
 * 4. Use .split to separate to individual characters
 * 5. Callback function: 
 * .reduce takes callback with 2 arguments: "acc" and the current letter "word".
 * 
*/
const assert = require('assert');


const countWords = string => {
    let wordList = string.toLowerCase().match(/[a-z]/gi).sort()
   return JSON.stringify(
      wordList.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
      }, {})
    )
      .replace(/[, ]+/g, " ")
      .replace(/['"]+/g, "")
      .replace(/[{}]+/g, "")
  }
  
  console.log(countWords('How many of each letter are there in this string'))
  //TESTS
  if (typeof describe === 'function') {
    
    //Returns an objet representing the frequencies of each letter in string. 
    describe('#countWords()', () => {
      it('should take a string and return a list of characters and how frequently they appear in the strting', () => {
        assert.deepEqual(countWords('words'), ('d:1 o:1 r:1 s:1 w:1') )
      });
    });
};
  
  //should return in alphabetical order
  describe('#countWords()', () => {
    it('should return characters in alphebetical order', () => {
      assert.deepEqual(countWords('cba'), ('a:1 b:1 c:1') )
    });
  });
  
  //ignores capitolization
  describe('#countWords()', () => {
    it('ignore capitolization', () => {
      assert.deepEqual(countWords('WORDS'), ('d:1 o:1 r:1 s:1 w:1') )
    });
  });
  

//ignores everything except letters. No space, numbers, or punctuation. 
describe('#countWords()', () => {
  it('should not include punctuation', () => {
    assert.deepEqual(countWords('w,o. r,ds'), ('d:1 o:1 r:1 s:1 w:1') )
  });
});

//should ignore spaces
describe('#countWords()', () => {
  it('should not return blank spaces', () => {
    assert.deepEqual(countWords('wo rds'), ('d:1 o:1 r:1 s:1 w:1') )
  });
});

//ignores numbers
describe('#countWords()', () => {
  it('should not return numbers', () => {
    assert.deepEqual(countWords('w33ords'), ('d:1 o:1 r:1 s:1 w:1') )
  });
});

