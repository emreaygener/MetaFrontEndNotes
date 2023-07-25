// create your classes here
class Mammal{
    breath(){
        console.log("Breathing!");
    }
}
class Horse extends Mammal{
    run(){
        console.log("Running!");
    }
}
class Whale extends Mammal{
    swim(){
        console.log("Swimming!");
    }
}
var arabianHorse = new Horse();
var killerWhale = new Whale();
arabianHorse.run();
killerWhale.swim();
arabianHorse.breath();
killerWhale.breath();

//polymorphism
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//inheritance
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

//encapsulation
"abc".toUpperCase(); // you don't need to know how toUpperCase() works to use it

//abstraction
// abstraction is the process of hiding the implementation details and showing only the functionality to the users. to simplify, abstraction means displaying only essential information and hiding the details for ease of use and understanding.