do {
    var a = prompt("Enter 1st number");
    var b = prompt("Enter 2nd number");
    var opp = prompt("Enter operation");

    if (opp == "+") {
        console.log(Number(a) + Number(b));
    }
    else if (opp == "-") {
        console.log(Number(a) - Number(b));
    }
    else if (opp == "*") {
        console.log(Number(a) * Number(b));
    }
    else if (opp == "/") {
        console.log(Number(a) / Number(b));
    }
    else if (opp == "%") {
        console.log(Number(a) % Number(b));
    }
    else {
        console.log("Invalid operation");
    }

    var c = prompt("Do you want to perform another calculation? (yes/no)");
} while (c === "yes");


