"use strict";
// Question 59: 
//  Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Object.defineProperty(exports, "__esModule", { value: true });
// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 10
let addFive = makeAdder(10);
console.log(addFive(20)); // If we put 20 in the box, it gives us 30
// We made a function (magic box) that adds 10 to any number.
