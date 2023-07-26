const colors = ['red','orange','yellow'] // foreach loop in c#
for (var color of colors) {
    console.log(color);
}

// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }
//This would not work because objects are not iterable

// To iterate objects there are 3 methods
// object.keys
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
//object.values
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
//object.entries
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
// these methods return arrays
// this way we can iterate over objects
//example
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}