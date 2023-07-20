// const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a counter object:
const counter = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

// d:1 e:1 h:1 l:3 o:2 r:1 w:1

/*
User will input a string.

use a regular expression to filter for only letters [a-z][A-Z]

regex: /[a-z]/gi
*/

// example paragraph:
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// regular expression finds characters a-z
// regex also uses global and case-insensitive flags ('gi' at the end)
// g flag: catches ALL matches to the regular expression
// i flag: catches lower and uppercase letters
// the i flag isn't even necessary b/c I use .toLowerCase() prior to matching the regex
const regex = /[a-z]/gi;
const found = paragraph.toLowerCase().match(regex);

console.log(found); // we have an array of all letters from the paragraph

/*
found:
[
  't', 'h', 'e', 'q', 'u', 'i', 'c',
  'k', 'b', 'r', 'o', 'w', 'n', 'f',
  'o', 'x', 'j', 'u', 'm', 'p', 's',
  'o', 'v', 'e', 'r', 't', 'h', 'e',
  'l', 'a', 'z', 'y', 'd', 'o', 'g',
  'i', 't', 'b', 'a', 'r', 'k', 'e',
  'd'
]
*/

// we need to iterate over the array and increment the properties of the counter object

for (item of found) {
  counter[item]++;
}

console.log(counter);

/*
counter:
{
  a: 2,
  b: 2,
  c: 1,
  d: 2,
  e: 4,
  f: 1,
  g: 1,
  h: 2,
  i: 2,
  j: 1,
  k: 2,
  l: 1,
  m: 1,
  n: 1,
  o: 4,
  p: 1,
  q: 1,
  r: 3,
  s: 1,
  t: 3,
  u: 2,
  v: 1,
  w: 1,
  x: 1,
  y: 1,
  z: 1
}
*/

// now that we've counted the letters and put them in this object, we need to create some type of output of these letters:

let outputStr = "";

for (const [key, value] of Object.entries(counter)) {
  outputStr += ` ${key}: ${value}`;
  outputStr.trimStart();
}

console.log(outputStr);

/*
current outputStr:
 a: 2 b: 2 c: 1 d: 2 e: 4 f: 1 g: 1 h: 2 i: 2 j: 1 k: 2 l: 1 m: 1 n: 1 o: 4 p: 1 q: 1 r: 3 s: 1 t: 3 u: 2 v: 1 w: 1 x: 1 y: 1 z: 1
*/

// terminal application stuff:
const getPrompt = () => {
  rl.question("Enter Something: ", (something) => {
    console.log(`you entered: ${something}`);
    rl.close();
  });
};

getPrompt();
