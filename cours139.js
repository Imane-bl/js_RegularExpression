/*
  Regular Expression
  Character Classes part2
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;// ['Spam', 'Spam', 'Spam', 'Spam', 'Spam']
console.log(names.match(re));

console.log(re.test(names));//true 
console.log(/(\bspam|spam\b)/ig.test("Osama"));//f osama ubda bspan aw yntahi bspam? non f 
console.log(/(\bspam|spam\b)/ig.test("1Spam"));//true fin 
console.log(/(\bspam|spam\b)/ig.test("Spam1"));//true debut