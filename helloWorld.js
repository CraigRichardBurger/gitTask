let print = "Git is Awesome!"

alert(print);

let drinks = {
    coke: 10,
    water: 10,
    coffee: 10,
    juice: 10,
    milk: 10,
};

let total = 0;

function displayMenu1() {
    let inputDrink = prompt("What drink would you like to order?, We have:  " + Object.getOwnPropertyNames(drinks));
    if (Object.getOwnPropertyNames(drinks).includes(inputDrink)) {
        total += drinks[inputDrink];
        alert("Great Choice!  New total is: R" + total);
    } else {
        alert("Please choose a valid option from the menu");
    }
}

displayMenu1();


console.log("Your total is: R" + total);
