for(var i=1;i<=3;i++){
    console.log(i);
}
console.log("Go");

for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!");

var counter =3;
while(counter>0){
    console.log(counter);
    counter--;
}
console.log("Happy New Year!");

for(var i=1;i<=5;i++)
{
    console.log(i);
}console.log("Counting is completed!");

for(var i=5;i>=1;i--)
{
    console.log(i);
}console.log("Countdown finished!");

var counter=1;
while(counter<=5)
{
    console.log(counter);
    counter+=1;
}console.log("Counting completed!");

var counter = 2018;
while(counter<=2022)
{
    console.log(counter);
    counter++;
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
} //Note: In order to have the styles applied, try running this code snippet in your browser's console.

for (let i = 1; i <= 10; i++) {
    if (i == 1) {
      console.log("Gold medal");
    } else if (i == 2) {
      console.log("Silver medal");
    } else if (i == 3) {
      console.log("Bronze medal");
    } else {
      console.log(i);
    }
  }
  
  for (let i = 1; i <= 10; i++) {
    switch (i) {
      case 1:
        console.log("Gold medal");
        break;
      case 2:
        console.log("Silver medal");
        break;
      case 3:
        console.log("Bronze medal");
        break;
      default:
        console.log(i);
        break;
    }
  }
  