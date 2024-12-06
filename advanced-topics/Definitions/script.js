
// Definition

// This:
// this refers to the context in which a function is called. The value of this depends on how a function is invoked and can behave differently in different scenarios.

// this work in javascript: 
// Global:
// When this is used in the global context (outside of any function), it refers to the global object.
// example
// console.log(this); ans: window

// function:
// when this is used inside function is called function. it refer to the global object
// example
// function myFunction() {
//     console.log(this);
//   }
//   myFunction();  ans: window
  
// Method:
// when a function is called as a method of an object .it refers to the object itself. 
// example
// const person = {
//     name: 'John',
//     greet: function() {
//       console.log(this.name);
//     }
//   };
  
//   person.greet();  ans:  This will log 'John' because 'this' refers to the 'person' object.

// function inside method es5:
// when this is used in function we use asynonchronus function.
// example
// const person = {
//     name: 'John',
//     greet: function() {
//       console.log(this.name);
//     }
//   };
  
//   person.greet();  ans:  This will log 'John' because 'this' refers to the 'person' object.

// function inside method es6:
// when this is used in function we use arrow function 
// example
// const person = {
//     name: 'Jane',
//     greet: function() {
//       const arrowFunction = () => {
//         console.log(this.name); // Arrow function uses 'this' from the surrounding context
//       };
//       arrowFunction();
//     }
//   };
  
//   person.greet();  ans:  This will log 'Jane' because the arrow function uses 'this' from the 'greet' method, which refers to the 'person' object.
  
// Constructor function:
// In constructor functions or classes, this refers to the instance of the object being created.
// example
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }
  
//   const myCar = new Car('Toyota', 'Corolla');
//   console.log(myCar.make);  // This will log 'Toyota'
  
  