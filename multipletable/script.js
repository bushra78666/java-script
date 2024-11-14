function multipletable(n) {
    if (n<0 ){
        return "invalid input";
    }
 for (var a = 1; a <=10  ; a++){
    console.log( n * a );
 }   
}
var c = prompt("Enter a number ");
c = Number(c);
console.log(multipletable(c));
