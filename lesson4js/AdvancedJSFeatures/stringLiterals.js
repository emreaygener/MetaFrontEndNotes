'Hello, World!'
"Hello, World!"
`Hello, World!` //thats them backticks
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`); //display both variables using template literals ==> useds like this cannot be done by double or single quotes

var greet2 = "Hello";
var place2 = "World";
console.log(greet2 + " " + place2 + "!"); //display both variables without using template literals

`Hello,
World
!
`//multiline is perfectly fine cannot be done by double or single quotes

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`); 