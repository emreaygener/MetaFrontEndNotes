var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`

var score = 8;
console.log("Mid-level skills: "+ (score>0&&score<10));
//Solution
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)

var timeRemaining = 0;
var energy = 10;
console.log("Game over: "+(timeRemaining==0||energy==0));
//Solution
var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);


var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0
console.log("Is",num1,"an even number?",result1);
console.log("Is",num2,"an even number?",result2);
//Solution
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log(5+10);
//Solution
console.log(5 + 10); // 15


var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);
//Solution
var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
//Solution
var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8