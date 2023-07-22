try{
    console.log(a+b);
}catch(err){
    console.log(err);
    console.log("There was an error.");
    console.log("The program will continue to run.");
    console.log("The error was saved in the error log.");
}
console.log("My program does not stop.");

try{
    throw "This is an error";
}catch(err){
    console.log(err);
    console.log("There was an error.");
    console.log("The program will continue to run.");
    console.log("The error was saved in the error log.");
}
console.log("My program does not stop.");

try{
    throw new ReferenceError();
}catch(err){
    console.log(err);
    console.log("There was an error.");
    console.log("The program will continue to run.");
    console.log("The error was saved in the error log.");
}
console.log("My program does not stop.");