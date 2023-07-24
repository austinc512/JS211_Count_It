# JS211_Count_It

Given a sentence, paragraph or novel, count the letters in the string. Ignore whitespace and anything not [a-z][A-Z], i.e. punctuations and numbers.

Example
Given: A string - like "Hello World"

Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

Instructions

1. First build this project in the terminal
2. Then attach it to the DOM
3. Work through the challenge together
4. As always whiteboard it and make a code plan
   > Hint: convert all to lowercase first
5. Translate from English to pseudo code then to JavaScript
6. Test
7. Present to class
8. Turn in the URL to your repo, once for each person in your group

> Use this challenge input: "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

Push Yourself Further

1. Use RegEx
2. Make a word count
3. Count each word's appearance
4. [Calculate the grade level/proficiency of English](https://www.thoughtco.com/calculating-reading-level-1857103) for the sentence, paragraph or novel

clarify the problem:

d:1 e:1 h:1 l:3 o:2 r:1 w:1

^^ this looks like an object.

Create an object that can be used as a counter.

"The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

iterate over the input string, and incrememt the counter object's property

a:4 b: 1, c: 2, etc.

return the properties of the counter object.

2023.07.24