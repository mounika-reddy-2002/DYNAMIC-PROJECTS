let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let result = document.getElementById("gameResult");

let input = document.getElementById("userInput");
let successMsg = "Congratulations! You got it right.";
let errorMsg = "Please Try Again!";

let num1 = Math.ceil(Math.random() * 100);
let num2 = Math.ceil(Math.random() * 100);
first.textContent = num1;
second.textContent = num2;

function check() {
    let resultSum = num1 + num2;
    if (resultSum === parseInt(input.value)) {
        result.textContent = successMsg;
        result.style.backgroundColor = "#028a0f"
    } else {
        result.textContent = errorMsg;
        result.style.backgroundColor = "#1e217c"
    }
}

function restart() {
    num1 = Math.ceil(Math.random() * 100)
    num2 = Math.ceil(Math.random() * 100)
    first.textContent = num1;
    second.textContent = num2;
    result.textContent = "";
}
