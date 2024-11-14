
var num1 = prompt("Enter the first number");
num1 = Number(num1); 
var num2 = prompt("Enter the second number");
num2 = Number(num2);
if(num1 > num2){
    a = num1;
}else{
    a = num2;
}
while (true) {
    if(a % num1 == 0 && a % num2 == 0) {
        lcm = a;
        break;
    }
    a+=1;
}

console.log("The LCM of " + num1 + " and " + num2 + " is: " + lcm);
