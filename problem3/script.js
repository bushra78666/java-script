
const form = document.querySelector("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const error = document.querySelector("#error");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");

const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValidation =/^(?=.*[!@#$%^&(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;


form.addEventListener("submit", function(e){
    e.preventDefault();
    if(input1.value.trim() == "" || input2.value.trim() == ""){
        error.textContent =  "All fields are required";
        error.style.color= "red";
    }
    else if(!emailValidation.test(input1.value)){
        error2.textContent =  "Email is invalid";
        error2.style.color= "red";
    }
    else if(!passwordValidation.test(input2.value)){
        error1.textContent =  "Password is invalid";
        error1.style.color= "red";
      
    }
    else{
        error.textContent =  "Form is submitted....";
        error.style.color= "green";
    }
});