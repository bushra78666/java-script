// create a tabbbed interface where clicking on the tabs displays the different content section without page reload

// let home = document.querySelector("#home");
// let about = document.querySelector("#about");
// let contact = document.querySelector("#contact");

// let homeContent = document.querySelector("#homeContent");
// let aboutContent = document.querySelector("#aboutContent");
// let contactContent = document.querySelector("#contactContent");

// let h3 = document.querySelectorAll("h3");

// home.addEventListener("click", function () {
//   h3KoHidekaro();
//   homeContent.style.display = "block";
// });
// about.addEventListener("click", function () {
//   h3KoHidekaro();
//   aboutContent.style.display = "block";
// });

// contact.addEventListener("click", function () {
//   h3KoHidekaro();
//   contactContent.style.display = "block";
// });

// function h3KoHidekaro() {
//   h3.forEach(function (h) {
//     console.log(h);
//     h.style.display = "none";
//   });
// }

// <------------- DEBUG THIS CODE -------------------------------->
let h3 = document.querySelectorAll("h3");
let h1 = document.querySelector("h1");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let sections = {
  home: document.querySelector("#homecontent"),
  about: document.querySelector("#aboutcontent"),
  contact: document.querySelector("#contactcontent"),
};

document.querySelectorAll(".home, .about, .contact").forEach((e) => {
  e.addEventListener("click", () => {
    h3.forEach((h) => (h.style.display = "none"));
    sections[e.classList[0]].style.display = "block";
  });
});

function h3KoHidekaro() {
  h3.forEach((h) => (h.style.display = "none"));
}

h1.addEventListener("click", function(){
    h1KoHidekaro();
    src1 = img1.src;
    src2 = img2.src;
    img1.src = src2;
    img2.src = src1;
    if(img1.src = src2){
      img1.style.display = "block"
    }
    else{
      img2.style.display = "block"
    }
})
function h1KoHidekaro(){ 
      h1.style.display = "block";  
    };