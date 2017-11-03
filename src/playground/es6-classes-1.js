class Person {
    constructor(name = 'Anonymous', age = 0) { // Anonymus is the default parameter if name is not provided
        this.name = name; //this refers to the class instance
        this.age = age;
    }
    getGreeting() {
        return `Hi! I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// Subclass

class Student extends Person {
    constructor(name, age, major) { // you can define what parameters you want to use
        super(name, age); // it needed to be able to use the parent class parameters
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // without !! the value is given back. !! if 'true' -> 'true', if 'false' -> 'false'
    }
    /* getDescription() { // you can override the parent method
        return 'testing';
    } */
    getDescription() { // wirth this technic you can extend the parent getDescription method
        let description = super.getDescription();
        if (this.hasMajor()) {
            return description += ` Their major is ${this.major}.`;
        }
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = 'Nowhere') {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    /* hasHomeLocation() {
        return !!this.homeLocation;
    } */
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation){
            return greeting += ` I am visiting from ${this.homeLocation}.`;
        }
    }
}

const me = new Person('Laszlo', 36);
const other = new Person();

const me2 = new Student('Peter', 36, 'JavaScript');

const me3 = new Traveler('Laszlo Peter', 36, 'Gyor');
const other2 = new Traveler();

console.log('"person class",', me.getDescription());
console.log('"student class",', me2.hasMajor());
console.log('"student class",', me2.getDescription());
console.log('"person class",', other.getDescription());
console.log('"traveler class",', me3.getGreeting());
console.log('"traveler class",', other2.getGreeting());