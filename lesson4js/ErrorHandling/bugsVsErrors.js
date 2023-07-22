// Bugs do not stop the execution of the program, but errors do.

function myFunction(x,y) {
    console.log(x+y);
}
myFunction(1,2); // works properly
myFunction("1",2); // This is a bug, but it does not stop the program from running but it does noot work as intended
console.log(a+b);// This is an error, and it stops the program from running 