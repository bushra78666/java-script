
function table(n) {
    if (n<0) {
        return "Invalid input";
    }
for (var i = 1; i <= 10 ; i++) {
    console.log(c+ "X" + i + "=" + n * i);
}
}
var c = prompt("Enter a number");
c = Number(c);
console.log(table(c));


// var arr = [1,  2,  3,  4,  5,  6,  7,  8,  9, 10];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// var arr = ["ahmed" ,["bushra"],["fatima"]];

// console.log(arr[2]);


// var age = prompt("Enter a age");
// age = Number(age);

// if(age < 18){
//     console.log("bushra tum abhi choti ho");
// }else if(age >= 18  &&  age < 40){
//     console.log("tum teenager ho gai ho");
// }else if (age > 40) {
//     console.log("tum bari ho gai ho ")
// }else{
//     console.log("tum kuch nhi kr sakti ho");
// }