
// globalThis
// console.log(this);

// functionThis
// function myFunction() {
//     console.log(this);
// }

// myFunction();

//   MethodThis
// const obj = {
//     nb: function () {
//         console.log(this)
//     }
// }
// obj.nb();

//   function inside method es5
// const arr ={
//     nb : function(){
//        function nice() {
//         console.log(this)
//        }
//        nice();
// }
// }
// obj.nb();

// function inside method es6
// const arr2 = {
//     name: "bushra",
//     age: 18,
//     nb: function () {
//         const nice = () => {
//             console.log(this.age);
//         }
//         nice();
//     }
// }
// arr2.nb();

// constructor funtion 
// function nice (name, age) {
//     this.name = name;
//     this.age = age;
        // return this;
// }
// const mycar = new nice ("bushra",18);
// console.log(mycar);

// Eventlistener

// document.querySelector("button").addEventListener("click", function() {
//     console.log(this);
// });
