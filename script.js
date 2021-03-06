'use strict';

// Constructor
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
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

// instanceof
console.log(franko instanceof Person);
console.log(jill instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

franko.calcAge();
mathilda.calcAge();
olga.calcAge();

console.log('---------------');
console.log(franko.__proto__);
console.log(franko.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(franko));
console.log(Person.prototype.isPrototypeOf(olga));
console.log(Person.prototype.isPrototypeOf(Person));

//Person.prototype zamislimo kao prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapiens';
console.log(franko);
console.log(franko.species, olga.species);

console.log(franko.hasOwnProperty('firstName'));
console.log(franko.hasOwnProperty('species'));

console.log(franko.__proto__);
console.log(franko.__proto__.__proto__);
console.log(franko.__proto__.__proto__.__proto__);
console.log(franko.valueOf());
console.log(franko);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

let arr = [1, 2, 3, 1, 2, 3, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// add new method to array
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
