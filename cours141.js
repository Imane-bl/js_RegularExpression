/*
  Regular Expression

  Quantifiers 2
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/ig))// s[3nmbr]s
console.log(serials.match(/s\d{4,5}s/ig))// s[4|5nbr]s range 
console.log(serials.match(/\w\d{4,}\w/ig))  //s[at least 4]s at least 
//4 ou plus 





















/*





console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S*/