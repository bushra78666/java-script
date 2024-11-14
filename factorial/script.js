function factorial(n) {
    if (n<0) {
        return "Invalid input"
    }   
var a = 1;
for (var  b = 1; b<=n ; b++) {
     a*= b;
}
  return a ;
}
var c = prompt("do you wnat factorial these numbers? yes/no");
if(c == "yes") {
    var  i = prompt("enter a number ");
    i = Number(i);
    console.log(factorial(i));
}

