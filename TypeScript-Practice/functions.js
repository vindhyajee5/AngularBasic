"use strict";
//Normal function
function greet() {
    console.log("welcome to typescripts");
}
greet();
function addition(a, b) {
    return a + b;
}
console.log("Addition :", addition(10, 20));
//Optional Paramter
function fullName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}
console.log(fullName("vindhya", "prasad"));
console.log(fullName("rahul"));
//Default parameter
function calculateSalary(salary, bonus = 2000) {
    return salary + bonus;
}
console.log(calculateSalary(1000));
console.log(calculateSalary(1000, 5000));
//Arrow function
let multiply = (a, b) => a * b;
console.log(multiply(10, 5));
let sqare = (a) => a * a;
console.log(sqare(10));
//Rest parameter
function caltotal(...values) {
    return values.reduce((sum, value) => sum + value);
}
console.log(caltotal(10, 20, 30, 40, 50));
