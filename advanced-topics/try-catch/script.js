try {
    console.log(a);
} catch {
    console.log("a is not defined");
}

var b = 34;
console.log(b);


function multiply(a, b) {
    try{
        if(a* b==0){
            console.log("b is not defined");
        }
        else{
            console.log("defined value");
        }
    }
    catch{
        console.log("this is an error");
    }
}
multiply(6, 0);