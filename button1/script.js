// Js
// create an unorder list allow users to add or remove items dynamically using button

let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let li;

btn1.addEventListener("click", function () {
  if (input.value.trim() == "") {
  } else {
    li = document.createElement("li");
    li.textContent = input.value.trim();
    ul.appendChild(li);
    input.value = "";
  }
});
btn2.addEventListener("click", function(){
    ul.removeChild(li);
});