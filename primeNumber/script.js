
var a = prompt("Enter a number");
a = Number(a);
if (a < 2) {
    console.log("Not a prime number");
} else {
    var primenumber = true;
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            var primenumber = false;
        }
    }
    if (primenumber) {
        console.log(a + " is a prime number");
    } else {
        console.log(a + " is not a prime number");
    }
}

