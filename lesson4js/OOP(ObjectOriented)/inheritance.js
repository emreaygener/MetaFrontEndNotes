var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1.hasWings: ", eagle1.hasWings);
console.log("eagle1.canFly: ", eagle1.canFly);
console.log("eagle1.hasFeathers: ", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1);
console.log("penguin1 has feathers: ", penguin1.hasFeathers);
console.log("penguin1 can fly: ", penguin1.canFly);