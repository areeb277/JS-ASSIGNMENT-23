// JAVASCRIPT //

// QUESTION NO 1 //

let button = document.getElementById("calculate");
let quantity = document.getElementById("quantity");
let error = document.getElementById("error");
let discount = document.getElementById("discount");
let totalBill = document.getElementById("total-bill")

button.addEventListener("click" , function () {

    if (quantity.value === "" || Number(quantity.value) <= 0) {
        
        error.innerHTML = "Please enter a valid quantity!";
        return;

    }

    error.innerHTML = ""

    let price = 250;
    let total = price * Number(quantity.value);

    if (total >= 1000) {
        
        let discounts = total * 0.10;
        let bill = total - discounts;

        discount.innerHTML = "Discount:" +" "+ discounts;
        totalBill.innerHTML = "Total Bill:" +" "+ bill;

        
    } else {
        
        console.log("Discount Bill: Rs: 0");
        console.log("Total Bill:" +" "+ total);
        
    }
});

// QUESTION NO 2 //

let btn = document.getElementById("gen-ran-number");
let showNumber = document.getElementById("show-number");

btn.addEventListener("click" , function () {

    let randomNumber = Math.floor(Math.random()* 100 + 1);
    
    if (randomNumber > 50) {
        
        showNumber.innerHTML = "Number greater than 50:";

    } else if (randomNumber <= 50) {

        showNumber.innerHTML = "Number Less than 50:";

    }

});

// QUESTION NO 3 //

let lastBtn = document.getElementById("last-btn");
let result = document.getElementById("result");

lastBtn.addEventListener("click" , function () {

    let marks = Number(document.getElementById("marks").value);

    if (marks >= 80 && marks <= 100) {

        result.innerHTML = "Excellant:" +" "+ marks

    } else if (marks >= 60 && marks <= 79) {

        result.innerHTML = "Good:" +" "+ marks

    } else if (marks >= 40 && marks <= 59) {

        result.innerHTML = "Pass:" +" "+ marks

    } else if (marks < 40){

        result.innerHTML = "Fail:" +" "+ marks;

    };

});