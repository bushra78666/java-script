

var btn = document.querySelector("button")
var image1 = document.querySelector(".image1")
var image2 = document.querySelector(".image2")

btn.addEventListener("click", function(){
    src1 = image1. src;
    src2 = image2.src;
    image1.src = src2;
    image2.src = src1
});
