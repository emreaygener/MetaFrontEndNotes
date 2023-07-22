//Arrays are iterable
var veggies = ["carrots", "celery", "broccoli", "spinach"];
console.log(veggies.length); // 4

console.log(veggies[0]); // carrots
console.log(veggies[1]); // celery

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
//strings are iterable
var str = "Hello World!";
console.log(str.length); // 12

console.log(str[0]); // H
console.log(str[1]); // e

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//strings!==arrays
var greeting = "Hello World!";
var user = "John Doe";

console.log(greeting+user); // Hello World!John Doe
console.log(greeting.concat(user)); // Hello World!John Doe

var greet = "Hello, ";
var place = "World";

greet.length; // 7

greet.charAt(0); // 'H'

"Wo".concat("rl").concat("d"); // 'World'

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

"ho-ho-ho".lastIndexOf('h'); // 6

var clothes = [];
clothes.push('shirt');
clothes.push('pants');
clothes.push('socks');
clothes.push('shoes');
clothes.push('hat');

clothes.pop(); // 'hat'

clothes.push('glasses');

console.log(clothes[2]); // 'socks'

var favCar = {};
favCar.color = 'red';
favCar.convertible = true;

console.log(favCar); // { color: 'red', convertible: true }
