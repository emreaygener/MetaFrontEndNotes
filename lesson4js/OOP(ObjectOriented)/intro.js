// replacing purchase1 with this keyword makes the code more reusable and copy and paste ready in totalPrice method.
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculations = this.shoes * this.stateTax;
        console.log("Total Price:",calculations);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculations = purchase2.shoes * purchase2.stateTax;
        console.log("Total Price:",calculations);
    }
}
purchase2.totalPrice();