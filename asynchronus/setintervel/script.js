
let counter = 0;
var myintervel=  setInterval(function(){
    counter++;
    if(counter==1){
        console.log("hellooo");
    }
    else if(counter==2){
        console.log("i am bushra");
    }
    else{
        console.log("good bye");
        clearInterval(myintervel);
    }
},3000); 