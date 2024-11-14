
do{
var a = prompt("enter first num");
var b = prompt("enter second num");
var opp = prompt("enter operation");

if (opp == "+") {
    console.log(Number(a)-Number(b));
}
else if (opp == "*") {
    console.log(Number(a)/Number(b));
}
else if (opp == "%") {
    console.log(Number(a)+Number(b));
}
else if (opp == "-") {
    console.log(Number(a)%Number(b));
}
else{
    console.log("Invalid operation");
}
var  pro = prompt("Do you want perform another operation? (yes/No)");
}
while(pro === "yes")

