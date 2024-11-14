//age find
function age(age) {
    if (age < 18) {
        return "chid";
    }
    else if (age >= 18 && age < 40) {
        return "Teenager";
    }
    else if (age >= 40) {
        return "Adult";
    }
    else {
        return "invalid input";
    }
}
var c = prompt("Enter a number");
c = Number(c);
console.log(age(c));