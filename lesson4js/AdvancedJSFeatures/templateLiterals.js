// ES5 Strings
let noMultiline = "No multiline string in ES5";
console.log("Did you know? "+noMultiline);

// ES6 Multi-line template literals
let multiline = `
    Using ES6 
    backticks, 
    multi-line 
    strings are 
    possible!
`;
console.log(multiline);

// ES6 Variable Interpolation
let first=`He said, "Don't you know? ES6, it's got some new features!"`;
let second=`"Wouldn't you want to learn more?", he asked.`;
console.log(`${first} - and i got curious. ${second}`);