/*
  Regular Expression

  Quantifiers 1 
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
  \d->degit 
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let r1=/(\w+)@\w+.(com|net)/ig;
//let r1=/(\w+)@\w+.(\w)/ig;//tout
console.log(mails.match(r1));


let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let r2=/0\d*0/ig;
console.log(nums.match(r2));



let urls = "https://google.com http://www.website.net web.com"; // http + https
let r3=/(https?:\/\/)?(www.)?\w+.\w+/ig;//menah ida kants yjibha ida mknch nrml yjib http //
//sm a ihtmal ykoun kayn www .or not 
console.log(urls.match(r3));

