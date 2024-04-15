/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));//true psk tkhls biha 
console.log(/^we/ig.test(myString));//t ybda b we yes
console.log(/iz$/ig.test(names));//f 

console.log(/^21/ig.test(names));//f 
console.log(/^\d/ig.test(names));//t
console.log(/^\w/ig.test(names));//t//psk word car nmbr/cap/small
console.log(/^\s/ig.test(names));//f 

console.log(names.match(/\d\w{5}z/ig)); 
console.log(names.match(/\d\w{5}(?=Z)/ig));// ['1Osama', '2Ahmed', '5Gamal']

console.log(names.match(/\d\w{5}(?!=Z)/ig));



/*
console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
console.log(/lz$/ig.test(names));
console.log(/^\d/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));
*/