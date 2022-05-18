'use strict';

// // Constructor
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// };

// const franko = new Person('Franko', 1977);
// const mathilda = new Person('Mathilda', 1984);
// const olga = new Person('olga', 2021);

// // 1. new empty {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// console.log(franko);
// console.log(mathilda);
// console.log(olga);
// const jill = 'Jill';

// // instanceof
// console.log(franko instanceof Person);
// console.log(jill instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// franko.calcAge();
// mathilda.calcAge();
// olga.calcAge();

// console.log('---------------');
// console.log(franko.__proto__);
// console.log(franko.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(franko));
// console.log(Person.prototype.isPrototypeOf(olga));
// console.log(Person.prototype.isPrototypeOf(Person));

// //Person.prototype zamislimo kao prototypeOfLinkedObjects

// Person.prototype.species = 'Homo sapiens';
// console.log(franko);
// console.log(franko.species, olga.species);

// console.log(franko.hasOwnProperty('firstName'));
// console.log(franko.hasOwnProperty('species'));

// console.log(franko.__proto__);
// console.log(franko.__proto__.__proto__);
// console.log(franko.__proto__.__proto__.__proto__);
// console.log(franko.valueOf());
// console.log(franko);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// let arr = [1, 2, 3, 1, 2, 3, 4]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// // add new method to array
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// Challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);
// const Mazda = new Car('Mazda', 160);

// BMW.accelerate();
// Mercedes.accelerate();
// BMW.break();
// Mercedes.break();
// Mercedes.break();
// Mercedes.break();
// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// BMW.accelerate();
// Mazda.accelerate();
// Mazda.accelerate();
// Mazda.accelerate();
// Mazda.accelerate();

// // Procedural code
// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;

// const getWage = function (baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// // OOP
// const employee = {
//   baseSalary: 40000,
//   overtime: 10,
//   rate: 20,

//   getWage: function () {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());
// let a;
// //class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype.property
  // instance methods
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  //set property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${this._fullName} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hello 👍');
  }
}

PersonCl.hey();
// //class expression
// // const PersonCl = class{}

const jessica = new PersonCl('Jessica Black', 1982);
console.log(`${jessica.fullName} have ${jessica.age} years`);

// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

/* Rules about classes
1. Classes are NOT hoisted / iako su funcion declaration
ne možemo ih pozvati prije nego ih deklariramo
2. First class citizens - možemo ih proslijediti u funkciju i isto tako return
from functions
3. Classes are executed in strict mode
*/

// getters and setters
const account = {
  owner: 'Franko',
  movements: [100, 200, 300, 45],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

console.log(account.movements);
console.log(account.latest);

const walter = new PersonCl('Walter a', 2005);
console.log(walter.fullName);
