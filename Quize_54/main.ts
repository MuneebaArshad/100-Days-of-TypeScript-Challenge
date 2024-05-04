// Question 54: 
//  Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

interface FlexibleObject {
    [key: string]: string;
}

// Example usage
const flexibleObject: FlexibleObject = {
    section1: "jawascript",
    section2: "typescript",
    // Add more sections as needed
};

// You can access or modify the properties using dynamic keys
console.log(flexibleObject["section1"]); // Output: jawascript
console.log(flexibleObject["section2"]); // typescript

// You can also add or update properties dynamically
flexibleObject["section3"] = "python";
console.log(flexibleObject["section3"]); // Output: python

         
