
let input = document.querySelector("input");
let  people = document.querySelector(".people");

let data = [
    {
        name : "wheather",
        src : "https://tse1.mm.bing.net/th?id=OIP.sSzV7GL9FBDve_Tq33XAGAHaLH&pid=Api&P=0&h=220",
    },
    {
        name : "flower",
        src : "https://tse4.mm.bing.net/th?id=OIP.ZDqP1eZDiQmX5m1xTm8k7AHaLG&pid=Api&P=0&h=220",
    },
    {
        name : "food",
        src : "https://tse4.mm.bing.net/th?id=OIP.N4uGyy0cJkf2ssuEVVS_EwHaLJ&pid=Api&P=0&h=220",
    },
    {
        name : "coding",
        src : "https://tse3.mm.bing.net/th?id=OIP.SC9V3ecKVscdjR01SvkibAHaE8&pid=Api&P=0&h=220"
    },
    {
        name : "singing",
        src : "https://tse2.mm.bing.net/th?id=OIP.mSm9HdYH-9ujkZ4Zp7XZEAHaEK&pid=Api&P=0&h=220"
    },
    {
        name : "sport",
        src : "https://tse1.mm.bing.net/th?id=OIP.eNpPdy3FLmT6_1M05K8EKQHaKB&pid=Api&P=0&h=220"
    },
]
function render(data){
    let person = "";
  data.forEach(function(per){
    person  +=` <div class="person">
                    <div class="image">
                    <img src="${per.src}" alt="">
                </div>
                    <h5>${per.name}</h5>
                </div>
                `;
  });
  people.innerHTML = person;
};
render(data);
input.addEventListener("input", function(){
    let newdata = data.filter(function(items){
       return  items.name.startsWith(input.value);
    })
    render(newdata);
    people.innerHTML = person;
});
