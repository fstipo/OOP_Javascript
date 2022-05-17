'use strict';

// Constructor
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
};

const franko = new Person('Franko', 1977);
const mathilda = new Person('Mathilda', 1984);
const olga = new Person('olga', 2021);

// 1. new empty {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(franko);
console.log(mathilda);
console.log(olga);
const jill = 'Jill';

console.log(franko instanceof Person);
console.log(jill instanceof Person);
console.log(franko.calcAge());
