

function books(title,author,price) {
    this.title = title;
    this.author = author;
    this.price = price;
}
books.prototype.getdiscountprice = function(discountpercentage){
    const count = this.price-(this.price * discountpercentage/100);
    console.log(count);
}
var counter=  new books("jannat ky patay", "nimra ahmed", 500) ;
console.log(counter.getdiscountprice(10));
var counter1=  new books("peery kamil", "humera ahmed", 600) ;
console.log(counter1.getdiscountprice(50));
