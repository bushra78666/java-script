

let progress = document.querySelector(".progress");
let h1 = document.querySelector("h1");

let count = 0;
let  myinterval = setInterval(function(){
    count++;
    if(count == 101){
        clearInterval(myinterval);
        h1.style.display = "block";
        progress.style.width = "0%"
        count = 0;
        return;
    }else{
        progress.style.width = count+"%";
        h1.style.display = "none";

    }
},50)

