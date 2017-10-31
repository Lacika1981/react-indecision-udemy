//arguments object - no longer bound with arrow function

const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

/* const add = (a, b) => {
    console.log(arguments);
    return a + b;
} */ // arrow function is not working with 'arguments'

console.log(add(55, 1));

//this keyword - no longer bound

//ES5 solution

const userOne = {
    name: 'Laszlo',
    cities: ['Gyor', 'Crawley', 'Basinsgtoke'],
    printPlacesLived: function() {
        const that = this;
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        })
    }
}

userOne.printPlacesLived();

// ES6 solution

const userTwo = {
    name: 'Laszlo',
    cities: ['Gyor', 'Crawley', 'Basinsgtoke'],
    printPlacesLived: function() {
        this.cities.forEach(city => {
            console.log(this.name + ' has lived2 in ' + city);
        })
    }
}

userTwo.printPlacesLived();

// ES6-method definition syntax

const userThree = {
    name: 'Laszlo',
    cities: ['Gyor', 'Crawley', 'Basinsgtoke'],
    printPlacesLived() {
        this.cities.forEach(city => {
            console.log(this.name + ' has lived3 in ' + city);
        })
    }
}

userThree.printPlacesLived();

// ES6-method definition syntax with map-returns a new array but does not change the original one

const userFour = {
    name: 'Laszlo',
    cities: ['Gyor', 'Crawley', 'Basinsgtoke'],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived4 in ' + city);
    }
}

console.log(userFour.printPlacesLived());

// not working solution - on method can not be used arrow function as it will bound to the parent scope what is global scope

const userFive = {
    name: 'Laszlo',
    cities: ['Gyor', 'Crawley', 'Basinsgtoke'],
    printPlacesLived: () => {
        this.cities.forEach(city => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
}

// userFive.printPlacesLived();


const multiplier = {
    numbers: [1, 2, 4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());