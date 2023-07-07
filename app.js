var operators = document.getElementById("operators");

var error1 = document.querySelector(".error-1");
var error2 = document.querySelector(".error-2");
var error3 = document.querySelector(".error-3");
var allError = document.querySelector(".error");

const btn = document.getElementById("btn");
var display = document.querySelector(".display");


// console.log(typeof numTwo);

btn.addEventListener("click", function() {
    var numOne = parseInt(document.getElementById("numOne").value);
    var numTwo = parseInt(document.getElementById("numTwo").value);

    if (numOne && numTwo && operators.value) {
        switch (operators.value) {
            case "add":
                display.innerHTML = "Result => " + numOne + numTwo;
                display.style.opacity = "1";
                break;

            case "sub":
                display.innerHTML = "Result => " + (numOne - numTwo);
                display.style.opacity = "1";
                break;

            case "multiply":
                display.innerHTML = "Result => " + numOne * numTwo;
                display.style.opacity = "1";
                break;

            case "divide":
                display.innerHTML = "Result => " + numOne / numTwo;
                display.style.opacity = "1";
                break;

            default:
                // console.log("error");
                error3.style.opacity = "1";
                break;
        }
    } else if (numTwo) {
        // error1.innerHTML = "Need to add first number!!!";
        error1.style.opacity = "1";
        error3.style.opacity = "1";

    } else if (numOne) {
        // error2.innerHTML = "Need to add second number!!!";
        error2.style.opacity = "1";
        error3.style.opacity = "1";

    } else if (operators.value) {
        error1.style.opacity = "1";
        error2.style.opacity = "1";

    } else {
        error1.style.opacity = "1";
        error2.style.opacity = "1";
        error3.style.opacity = "1";
    }

    operators.value = 'empty';


});