// reference errors
console.log(a); //Uncaught ReferenceError: username is not defined

// syntax errors
var a "there is no assignment opperator"; //Uncaught SyntaxError: Invalid or unexpected tokken

// type errors
"hello".pop(); //Uncaught TypeError: "hello".pop is not a function

// range errors
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36