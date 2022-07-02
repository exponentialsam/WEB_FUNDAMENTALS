

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]);
// console.log(p1);

var p2 = pizzaOven("hand tossed","marinara", ["mozzarella" , "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

var p3 = pizzaOven("thin crust", "spicy", "goat cheese", ["olives", "green peppers", "mushrooms"])
// console.log(p3);

var p4 = pizzaOven("filled crust","chunky", "mozzarella", ["pineapple","sundried tomatoes", "sausage"])
// console.log(p4);

// function randomPizza(){
//     var pizzaOption['p1','p2','p3','p4']
//     return [Math.random()];
// }
// console.log(randomPizza());