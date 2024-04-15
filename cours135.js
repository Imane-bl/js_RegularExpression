/*regular exp modifies 
/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;//i insensetiv ghayr hasasa
//g->global ymchi f kol blasa w yjib kol res
//kon ndir gher i brk hatmdli lindice wm kima liltht 

console.log(myString.match(regex));//['Elzero', 'elzero'] myhtmch soit sghir soit kbir

console.log(myString.match(/Elzero/));//['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
//y9oli lindex ta3ou win jay tan
//march trj3li array fiha kolch wch lmit 