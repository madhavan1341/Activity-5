// The Person class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  greet() {
    console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
  }
}
const person2 = new Person('Madhava', 'kumaran', 23);
console.log(person2.getFullName());
person2.greet();


// A class to calculate the uber price


class UberPricingCalculator {
  constructor(baseFare, costPerKM, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKM = costPerKM;
    this.costPerMinute = costPerMinute;
  }
  calculateFare(distanceInKM, timeInMinutes) {
    const fare = this.baseFare + (distanceInKM * this.costPerKM) + (timeInMinutes * this.costPerMinute);
    return fare;
  }
}
const uberX = new UberPricingCalculator(200.5, 1.5, 0.3); 
const distance = 10;
const time = 20;

const fare = uberX.calculateFare(distance, time);
console.log(`The UberX fare for a ${distance}-Kilometer taking ${time} minutes is Rs.${fare}`);
