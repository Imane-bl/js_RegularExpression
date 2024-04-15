/*
  Regular Expression
  Character Classes part1 
  . => matches any character, except newline(\n) or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;//mm space
let word = /\w/g;//jab lettre sghae /kbar /nbr mais majabcg special car
let word2 = /\W/g;//Hna capital l3ks yjib special car et espaces
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(word2));
console.log(email.match(valid));