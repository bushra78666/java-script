// call
// function arr() {
//     this.name = "bushra";
//     this.age = 18;
//     console.log(this);
// }
// arr.call("hira");

// apply
// function arr2() {
//     this.name = "nimra";
//     this.age = 17;
//     console.log(this);
// }
// arr2.apply(10,["rabia", "zari", "bushra"]);

// bind
// function arr2(name,age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
// var binded = arr2.bind(10,["rabia", "zari", "bushra"]);
// binded(30);

// prototype
// function contact(name,age) {
//     this.name = name;
//     this.age = age;
// }

// contact.prototype.print = function(){
//     console.log(this.age);
// }
// var count=  new contact("fatima" , 20);
// count.print();
// var count1 = new contact("ahmed" , 15);
// count1.print();

// clouser
// function counter() {
//     var count = 1;
//     return  function(){
//         count++;
//         console.log(count);
//     }
// }
// var store = counter();
// store();
// store();
// store();
