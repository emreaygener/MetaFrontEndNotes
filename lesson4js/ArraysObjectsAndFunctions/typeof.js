//Using typeof
var test1 = typeof("abcdef");
var test2 = typeof(123);
var test3 = typeof(true);
var test4 = typeof({});
var test5 = typeof([1,2,3]);
var test6;
var test7 = typeof({"abcdef": 123});
var test8 = typeof(1.23);
var test9 = typeof(1<2);
var test10 =typeof( function abc(){console.log("abc")});
var test11 = typeof(null);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);
console.log(test9);
console.log(test10);
console.log(test11);
