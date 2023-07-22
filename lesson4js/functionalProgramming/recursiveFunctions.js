let counter = 3;
function exampleRecursiveFunction() {
  console.log(counter);
  counter--;
  if (counter === 0) return;
    exampleRecursiveFunction();
}
exampleRecursiveFunction();